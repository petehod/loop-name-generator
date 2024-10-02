import type { NextApiRequest, NextApiResponse } from "next";

// Make sure you have your API key set in your environment variables (e.g., .env.local)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const prompt = `You are a helpful assistant helping a music producer come up with names for their music loops. 
You will be given a word or words that represents the theme the music producer is going for. 
Your job is to come up with 10 ideas for related, interesting words that would work well as the name of a piece of music. These should
be single words that are memorable and easy to spell. In your response, simply include the 10 words separated by commas. Include nothing else.
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { word } = req.body;

    if (!word) {
      return res.status(400).json({ error: "Word parameter is required." });
    }

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: "gpt-4o-mini", // Make sure the model name is correct
            messages: [
              { role: "system", content: prompt },
              { role: "user", content: word }
            ]
          })
        }
      );

      if (!response.ok) {
        throw new Error("Error generating response from OpenAI.");
      }

      const data = await response.json();
      const words = data.choices[0].message.content;

      return res.status(200).json({ words });
    } catch (error) {
      console.error("Error:", error);
      return res
        .status(500)
        .json({ error: "An error occurred while generating the response." });
    }
  } else {
    // Only POST requests are allowed
    return res.status(405).json({ error: "Method not allowed." });
  }
}
