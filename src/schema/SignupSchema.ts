import { EMAIL_INPUT, USERNAME_INPUT, PASSWORD_INPUT } from "@/constants";
import { z } from "zod";
export const SignupSchema = z.object({
  email: z
    .string()
    .email()
    .min(EMAIL_INPUT.minLength, { message: EMAIL_INPUT.minLengthMessage })
    .max(EMAIL_INPUT.maxLength, { message: EMAIL_INPUT.maxLengthMessage }),
  username: z
    .string()
    .min(USERNAME_INPUT.minLength, {
      message: USERNAME_INPUT.minLengthMessage
    })
    .max(USERNAME_INPUT.maxLength, {
      message: USERNAME_INPUT.maxLengthMessage
    }),
  password: z
    .string()
    .min(PASSWORD_INPUT.minLength, { message: PASSWORD_INPUT.minLengthMessage })
    .max(PASSWORD_INPUT.maxLength, { message: PASSWORD_INPUT.maxLengthMessage })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must have at least one uppercase letter"
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must have at least one lowercase letter"
    })
    .refine((value) => /[0-9]/.test(value), {
      message: "Password must have at least one number"
    })
    .refine((value) => /[!@#$%^&*(),.?":{}|<>]/.test(value), {
      message: "Password must have at least one special character"
    })
});
