import { User } from "@/schema";

export const LoggingService = {
  logSuccess: async (message: string, userInfo?: Partial<User>) => {
    try {
      await fetch("/api/log-success", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message, userInfo })
      });
    } catch (err) {
      console.error("Error logging success to server:", err);
    }
  },
  logError: async (error: Error, userInfo?: Partial<User>) => {
    try {
      await fetch("/api/log-error", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: error.message,
          userInfo: {
            ...userInfo,
            time: new Date().toISOString()
          }
        })
      });
    } catch (err) {
      console.error("Error logging to server:", err);
    }
  },
  logWarningToServer: async (warning: string, userInfo?: Partial<User>) => {
    try {
      await fetch("/api/log-warning", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ warning, userInfo })
      });
    } catch (err) {
      console.error("Error logging warning to server:", err);
    }
  }
};
