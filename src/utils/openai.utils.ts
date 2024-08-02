import OpenAI from "openai";

export const openai = new OpenAI({
  organization: process.env.NEXT_ORGANIZATION_ID,
  project: process.env.NEXT_PROJECT_ID,
});
