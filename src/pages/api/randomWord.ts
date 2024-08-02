import { openai } from "@/utils/openai.utils";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: `Generate me a random word to be used as a filename for a music producer's music file.
          This word should be memorable and under 8 characters long. I am using this for a project where I expect the words to be different everytime so
          make sure the word you choose is likely not something you've done recently. The words should
           Your word you choose should be recognizable. It should not require an extensive vocabulary to understand.
          purely be the word you choose, all lowercase with no punctuation`
        }
      ],
      model: "gpt-4o-mini"
    });

    res.status(200).json({
      result: completion.choices[0].message
    });
  } catch (error) {
    res.status(500).json({
      error: error ?? "Something went wrong"
    });
  }
}
