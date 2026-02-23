import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { apiClient } from '@/lib/apiClient';
import { API_CONFIG } from '@/config/api';
import {
  Calendar,
  CheckCircle2,
  ArrowLeft,
  Loader2,
} from 'lucide-react';
import { z } from 'zod';

/* ================= TYPES ================= */

interface AvailabilityItem {
  date: string;
  available_slots: string[]; // UTC ISO
}

interface AvailabilityResponse {
  success: boolean;
  message: string;
  data: AvailabilityItem[];
}

/* ================= VALIDATION ================= */

const demoFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name too short")
    .max(100)
    .regex(/^[a-zA-Z\s]+$/, "Only letters allowed"),

  email: z
    .string()
    .email("Invalid email format")
    .max(255),

  phone: z
    .string()
    .min(6, "Invalid phone number")
    .max(15)
    .regex(/^[0-9]+$/, "Only numbers allowed"),

  company: z
    .string()
    .min(2, "Company name too short")
    .max(100),

  message: z
    .string()
    .max(500, "Message too long")
    .optional(),
});

type FormData = z.infer<typeof demoFormSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

interface BookDemoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/* ================= TIMEZONE ================= */

const detectedTimezone =
  Intl.DateTimeFormat().resolvedOptions().timeZone;

const DEFAULT_TIMEZONE =
  detectedTimezone.startsWith('Australia/')
    ? detectedTimezone
    : 'Australia/Sydney';

function formatSlotToTimezone(
  utcIso: string,
  timezone: string
) {
  const date = new Date(utcIso);

  const dateLabel = new Intl.DateTimeFormat('en-AU', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: timezone,
  }).format(date);

  const timeLabel = new Intl.DateTimeFormat('en-AU', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: timezone,
  }).format(date);

  return { dateLabel, timeLabel };
}

/* ================= COMPONENT ================= */

export function BookDemoModal({
  open,
  onOpenChange,
}: BookDemoModalProps) {
  const [step, setStep] = useState<
    'date' | 'time' | 'form' | 'success'
  >('date');

  const [availability, setAvailability] = useState<
    AvailabilityItem[]
  >([]);

  const [selectedTimezone, setSelectedTimezone] =
    useState(DEFAULT_TIMEZONE);

  const [selectedDateKey, setSelectedDateKey] =
    useState<string | null>(null);

  const [selectedTime, setSelectedTime] =
    useState<string | null>(null);

  const [countryCode, setCountryCode] =
    useState('+61');

  const [isLoadingAvailability, setIsLoadingAvailability] =
    useState(false);

  const [hasFetched, setHasFetched] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ================= FETCH ================= */

  useEffect(() => {
    if (!open || hasFetched) return;

    // const fetchAvailability = async () => {
    //   try {
    //     setIsLoadingAvailability(true);

    //     // const res = await fetch(
    //     //   'http://192.168.1.79:8000/api/v1/booking/availability'
    //     // );
    //     const res = await apiClient<AvailabilityResponse>(
    //       API_CONFIG.BOOKING.AVAILABILITY
    //     );

    //     const data: AvailabilityResponse =
    //       await res.json();

    //     if (data.success) {
    //       setAvailability(data.data);
    //       setHasFetched(true);
    //     }
    //   } catch (err) {
    //     console.error(err);
    //   } finally {
    //     setIsLoadingAvailability(false);
    //   }
    // };
     
    const fetchAvailability = async () => {
  try {
    setIsLoadingAvailability(true);

    const data = await apiClient<AvailabilityResponse>(
      API_CONFIG.BOOKING.AVAILABILITY
    );

    if (data.success) {
      setAvailability(data.data);
      setHasFetched(true);
    }
  } catch (err) {
    console.error("Availability fetch failed:", err);
  } finally {
    setIsLoadingAvailability(false);
  }
};

    fetchAvailability();
  }, [open, hasFetched]);

  const selectedAvailability = useMemo(() => {
    if (!selectedDateKey) return null;
    return availability.find(
      (item) => item.date === selectedDateKey
    );
  }, [selectedDateKey, availability]);

  /* ================= VALIDATION ================= */

  const validateForm = () => {
    try {
      demoFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof FormData] =
              err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  /* ================= SUBMIT ================= */

  const handleSubmit = async () => {
    if (!validateForm() || !selectedTime) return;

    setIsSubmitting(true);

    const fullPhoneNumber =
      `${countryCode}${formData.phone}`;

    const payload: any = {
      name: formData.name.trim(),
      business_name: formData.company.trim(),
      work_email: formData.email.trim().toLowerCase(),
      contact_number: fullPhoneNumber,
      booking_datetime: selectedTime,
      timezone: selectedTimezone,
    };

    if (formData.message?.trim()) {
      payload.message = formData.message.trim();
    }

    // await fetch(
    //   'http://192.168.1.79:8000/api/v1/booking',
    //   {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(payload),
    //   }
    // );
    await apiClient(
  API_CONFIG.BOOKING.CREATE,
  {
    method: 'POST',
    body: JSON.stringify(payload),
  }
);

    setIsSubmitting(false);
    setStep('success');
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setStep('date');
      setSelectedDateKey(null);
      setSelectedTime(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      setHasFetched(false);
    }, 300);
  };

  /* ================= UI ================= */

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[520px] p-0 overflow-hidden">
        <div className="p-6">
          <AnimatePresence mode="wait">

            {/* DATE STEP */}
            {step === 'date' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <DialogHeader className="mb-6">
                  <DialogTitle className="flex gap-2 items-center">
                    <Calendar className="w-5 h-5 text-primary" />
                    Select Date
                  </DialogTitle>
                  <DialogDescription>
                    Choose your timezone
                  </DialogDescription>
                </DialogHeader>

                <select
                  value={selectedTimezone}
                  onChange={(e) => setSelectedTimezone(e.target.value)}
                  className="
    mb-4 w-full rounded-md border border-border
    bg-background text-foreground
    px-3 py-2 text-sm
    focus:outline-none  focus:ring-ring
    focus:border-ring
    disabled:cursor-not-allowed disabled:opacity-50
  "
                >
                  <option value="Australia/Sydney">Australia/Sydney</option>
                  <option value="Australia/Melbourne">Australia/Melbourne</option>
                  <option value="Australia/Brisbane">Australia/Brisbane</option>
                  <option value="Australia/Perth">Australia/Perth</option>
                  <option value="Australia/Adelaide">Australia/Adelaide</option>
                  <option value="Asia/Kolkata">India</option>
                  <option value="UTC">UTC</option>
                </select>


                {isLoadingAvailability ? (
                  <div className="flex justify-center py-10">
                    <Loader2 className="animate-spin" />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    {availability.map((item) => {
                      const formatted =
                        formatSlotToTimezone(
                          item.available_slots[0],
                          selectedTimezone
                        );

                      return (
                        <button
                          key={item.date}
                          onClick={() => {
                            setSelectedDateKey(item.date);
                            setStep('time');
                          }}
                          className="p-4 rounded-lg border border-yellow-100 hover:border-primary hover:bg-primary/5"
                        >
                          <div className="flex justify-between">
                            <span>{formatted.dateLabel}</span>
                            <span className="text-xs text-primary">
                              {item.available_slots.length} slots
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            )}

            {/* TIME STEP */}
            {step === 'time' && selectedAvailability && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <DialogHeader className="mb-6">
                  <DialogTitle>Select Time</DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-3 gap-3">
                  {selectedAvailability.available_slots.map((slot) => {
                    const formatted =
                      formatSlotToTimezone(slot, selectedTimezone);

                    return (
                      <button
                        key={slot}
                        onClick={() => {
                          setSelectedTime(slot);
                          setStep('form');
                        }}
                        className="p-3 border rounded-lg hover:border-primary hover:bg-primary/5"
                      >
                        {formatted.timeLabel}
                      </button>
                    );
                  })}
                </div>

                <Button variant="outline" className="mt-4" onClick={() => setStep('date')}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </motion.div>
            )}

            {/* FORM STEP */}
            {step === 'form' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <DialogHeader className="mb-6">
                  <DialogTitle>Complete Booking</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                  <Input placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                  <Input placeholder="Business Name"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />


                  <Input placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  {/* Phone with country code */}
                  <div className="flex gap-2">
                    <select
                      value={countryCode}
                      onChange={(e) =>
                        setCountryCode(e.target.value)
                      }
                      className="border rounded-md px-3
                      mb-4   border-border
    bg-background text-foreground
     py-2 text-sm
    focus:outline-none  focus:ring-ring
    focus:border-ring
    disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="+61">🇦🇺 +61</option>
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>

                    <Input
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value.replace(/\D/g, ''),
                        })
                      }
                    />
                  </div>

                  <Textarea placeholder="Message (Optional)"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep('time')}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>

                  <Button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      'Confirm Booking'
                    )}
                  </Button>
                </div>
              </motion.div>
            )}

            {/* SUCCESS */}
            {step === 'success' && (
              <motion.div className="text-center py-8">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Demo Booked Successfully!
                </h2>
                <Button className="mt-6 w-full" onClick={handleClose}>
                  Done
                </Button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
