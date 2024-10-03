import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { message, userInfo } = req.body;

    console.log("Success log:", message, userInfo);

    res.status(200).json({ message: "Success log recorded" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
