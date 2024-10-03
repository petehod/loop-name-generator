import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { error, userInfo } = req.body;

    console.log("Logging error:", error, userInfo);

    res.status(200).json({ message: "Error logged successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
