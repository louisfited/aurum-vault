
import {z} from "zod"
export const loginSchema = z.object({
    email: z.email({
      message: 'Please enter a valid email address',
    }),
    password: z.string({
      message: 'Please enter a valid password',
    }).min(8, 'Password must be at least 8 characters long'),
  })
  

 export const signupSchema = z.object({

    fullName: z.string({message:"please enter a valid name"}).min(2,{message:"fullName must be more than 2 characters"}),
    email: z.email({
      message: 'Please enter a valid email address',
    }),
    password: z.string({
      message: 'Please enter a valid password',
    }).min(8, 'Password must be at least 8 characters long'),
  })