const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
const API_KEY = import.meta.env.VITE_API_KEY || "";

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  API_KEY,
  IS_CONFIGURED: Boolean(API_BASE_URL && API_KEY),
  BOOKING: {
    AVAILABILITY: "/api/v1/booking/availability",
    CREATE: "/api/v1/booking",
  },
  CHATBOT: {
    CHAT: "/api/v1/chatbot/chat",
  },
};
