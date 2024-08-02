import OpenAI from "openai";

export const openai = new OpenAI({
  organization: process.env.NEXT_PUBLIC_ORGANIZATION_ID,
  project: process.env.NEXT_PUBLIC_PROJECT_ID,
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
