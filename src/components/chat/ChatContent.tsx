import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { apiClient } from "@/lib/apiClient";
import { API_CONFIG } from "@/config/api";

/* ================= TYPES ================= */

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  session_id: string;
  reply: string;
}

/* ================= CONFIG ================= */

const AVAILABLE_TIMEZONES = [
  "Australia/Sydney",
  "Australia/Melbourne",
  "Australia/Brisbane",
  "Australia/Perth",
  "Asia/Kolkata",
  "UTC",
];

/* ================= HELPERS ================= */

function generateUUID() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  // Fallback for older browsers
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
}

function getSessionId() {
  let id = localStorage.getItem("chat_session_id");

  if (!id) {
    id = `session_${generateUUID()}`;
    localStorage.setItem("chat_session_id", id);
  }

  return id;
}


function resetSession() {
  localStorage.removeItem("chat_session_id");
}

function extractISOSlots(reply: string) {
  const regex =
    /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+\d{2}:\d{2}/g;
  return reply.match(regex);
}

function groupSlotsByDate(
  slots: string[],
  timezone: string
) {
  const grouped: Record<string, string[]> = {};

  slots.forEach((slot) => {
    const dateLabel = new Date(slot).toLocaleDateString(
      "en-AU",
      {
        weekday: "short",
        month: "short",
        day: "numeric",
        timeZone: timezone,
      }
    );

    if (!grouped[dateLabel]) {
      grouped[dateLabel] = [];
    }

    grouped[dateLabel].push(slot);
  });

  return grouped;
}

function formatUTCToLocal(
  utc: string,
  timezone: string
) {
  return new Date(utc).toLocaleString("en-AU", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: timezone,
  });
}

/* ================= COMPONENT ================= */

export default function ChatContent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      role: "assistant",
      content:
        "Hi 👋 I'm OneTracker AI. Ask me anything about OneTracker, Features, or book a demo.",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatOptions, setChatOptions] =
    useState<string[] | null>(null);

  const [isBookingActive, setIsBookingActive] =
    useState(false);

  const sessionId = getSessionId();
  const timezone =
    Intl.DateTimeFormat().resolvedOptions()
      .timeZone;

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  /* ================= TYPING EFFECT ================= */

  const typeMessage = async (text: string) => {
    const id = generateUUID();
    let current = "";

    setMessages((prev) => [
      ...prev,
      { id, role: "assistant", content: "" },
    ]);

    for (let i = 0; i < text.length; i++) {
      await new Promise((r) =>
        setTimeout(r, 10)
      );
      current += text[i];

      setMessages((prev) =>
        prev.map((m) =>
          m.id === id
            ? { ...m, content: current }
            : m
        )
      );
    }
  };

  /* ================= SEND ================= */

  const sendToBackend = async (
    message: string
  ) => {
    setIsTyping(true);

    try {
      const response =
        await apiClient<ChatResponse>(
          API_CONFIG.CHATBOT.CHAT,
          {
            method: "POST",
            body: JSON.stringify({
              session_id: sessionId,
              message,
            }),
          }
        );

      const lowerReply =
        response.reply.toLowerCase();

      const isTimezoneRequest =
        lowerReply.includes("timezone");

      const isoSlots =
        extractISOSlots(response.reply);

      let cleanReply = response.reply;

      if (isoSlots) {
        isoSlots.forEach((slot) => {
          cleanReply = cleanReply.replace(
            slot,
            ""
          );
        });
      }

      await typeMessage(cleanReply.trim());

      if (isTimezoneRequest) {
        setChatOptions(AVAILABLE_TIMEZONES);
        setIsBookingActive(true);
      } else if (isoSlots) {
        setChatOptions(isoSlots);
        setIsBookingActive(true);
      } else {
        setChatOptions(null);
      }

      /* 🎉 Booking Success Detection */
      if (
        lowerReply.includes(
          "demo booked successfully"
        )
      ) {
        setIsBookingActive(false);
        resetSession();

        setTimeout(() => {
          setMessages([
            {
              id: "init",
              role: "assistant",
              content:
                "Hi 👋 I'm OneTracker AI. How can I assist you today?",
            },
          ]);
        }, 3000);
      }
    } finally {
      setIsTyping(false);
    }
  };

  /* ================= USER SEND ================= */

  const handleSend = async () => {
    if (!input.trim()) return;

    const message = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        id: generateUUID(),
        role: "user",
        content: message,
      },
    ]);

    setInput("");
    setChatOptions(null);

    await sendToBackend(message);
  };

  /* ================= OPTION CLICK ================= */

  const handleOptionClick = async (
    value: string
  ) => {
    setChatOptions(null);

    const isISO =
      /\d{4}-\d{2}-\d{2}T/.test(value);

    const display = isISO
      ? formatUTCToLocal(value, timezone)
      : value;

    setMessages((prev) => [
      ...prev,
      {
        id: generateUUID(),
        role: "user",
        content: display,
      },
    ]);

    await sendToBackend(value);
  };

  /* ================= CANCEL ================= */

  const handleCancelBooking = () => {
    resetSession();
    setChatOptions(null);
    setIsBookingActive(false);

    setMessages([
      {
        id: "init",
        role: "assistant",
        content:
          "Booking cancelled. How else can I assist you?",
      },
    ]);
  };

  /* ================= UI ================= */

  return (
    <>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex ${message.role === "user"
                ? "justify-end"
                : "justify-start"
              }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
                }`}
            >
              
                {message.content}
              
            </div>
          </motion.div>
        ))}

        {/* OPTIONS (Rendered as Assistant Bubble) */}
        {chatOptions && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="max-w-[80%] bg-muted p-3 rounded-2xl text-sm space-y-4">
              {chatOptions[0]?.includes("T")
                ? Object.entries(
                  groupSlotsByDate(chatOptions, timezone)
                ).map(([dateLabel, slots]) => (
                  <div key={dateLabel}>
                    <p className="text-xs text-muted-foreground mb-2">
                      {dateLabel}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {slots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => handleOptionClick(slot)}
                          className="p-2 text-sm rounded-lg border hover:border-primary hover:bg-primary/5 transition"
                        >
                          {new Date(slot).toLocaleTimeString("en-AU", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                            timeZone: timezone,
                          })}
                        </button>
                      ))}
                    </div>
                  </div>
                ))
                : chatOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleOptionClick(option)}
                    className="p-2 text-sm rounded-lg border hover:border-primary hover:bg-primary/5 transition"
                  >
                    {option}
                  </button>
                ))}
            </div>
          </motion.div>
        )}


        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-muted px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                <span
                  className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </motion.div>
        )}


        <div ref={messagesEndRef} />
      </div>

      {/* CANCEL BUTTON */}
      {isBookingActive && (
        <div className="px-4 pb-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={handleCancelBooking}
          >
            Cancel Booking
          </Button>
        </div>
      )}

      <div className="p-4 border-t border-border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask about tracking, pricing, demo..."
            className="flex-1 bg-muted/50 border-0"
          />
          <Button type="submit" size="icon">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </>
  );
}
