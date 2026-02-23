import { API_CONFIG } from "@/config/api";

type RequestOptions = RequestInit & {
  timeout?: number;
};

export async function apiClient<T = any>(
  endpoint: string,
  options: RequestOptions = {}
): Promise<T> {
  const { timeout = 10000, ...fetchOptions } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(
      `${API_CONFIG.BASE_URL}${endpoint}`,
      {
        ...fetchOptions,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_CONFIG.API_KEY, // 🔥 ALWAYS ATTACHED
          ...fetchOptions.headers,
        },
        signal: controller.signal,
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `API Error: ${response.status}`
      );
    }

    return await response.json();
  } finally {
    clearTimeout(id);
  }
}
