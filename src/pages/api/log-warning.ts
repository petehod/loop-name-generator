import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { warning, userInfo } = req.body;

    console.warn("Warning log:", warning, userInfo);

    res.status(200).json({ message: "Warning log recorded" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
