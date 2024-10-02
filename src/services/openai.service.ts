export const OpenAIService = {
  generateLoopNames: async (word: string) => {
    try {
      const response = await fetch("/api/generate-loop-names", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ word })
      });

      const data = await response.json();
      return data.words;
    } catch (error) {
      console.error("Error generating loop names:", error);
    }
  }
};
