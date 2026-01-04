import { loginSchema, signupSchema } from "@/libs/schemas/auth-schemas"
import {z} from "zod"

export type signupFormType = z.infer<typeof signupSchema>
export type loginFormType = z.infer<typeof loginSchema>