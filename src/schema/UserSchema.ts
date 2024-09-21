import { v4 } from "uuid";
import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().default(() => v4()),
  email: z.string().email(),
  username: z.string().min(1).max(20),
  savedNames: z.array(z.string()).default([]),
  createdAt: z
    .number()
    .optional()
    .default(() => Date.now()),
  lastLogin: z
    .number()
    .optional()
    .default(() => Date.now())
});

export type User = z.infer<typeof UserSchema>;

export const getDefaultUser = (id: string, email: string, username: string) =>
  UserSchema.parse({ id, email, username });
