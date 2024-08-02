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
    const { messages, model } = req.body;

    if (!messages || !model) {
      return res.status(400).json({ error: "Messages and model are required" });
    }

    const completion = await openai.chat.completions.create({
      messages,
      model,
    });

    res.status(200).json({ result: completion.choices[0].message });
  } catch (error) {
    res.status(500).json({ error: error ?? "Something went wrong" });
  }
}
