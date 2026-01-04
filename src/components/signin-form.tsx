"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import Link from "next/link"
import { z } from "zod"
import { loginSchema } from "@/libs/schemas/auth-schemas"
import { loginAction } from "@/libs/actions/auth-actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader, Loader2, Loader2Icon, LoaderCircle, LoaderPinwheel } from "lucide-react"



export function SigninForm({ className, ...props }: React.ComponentProps<"form">) {
  const router = useRouter()
  const [isLoading,setIsLoading] =useState(false)
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
     
      email: "",
      password: "",
    
    },
  })

 async function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log("Form submitted:", data)
    setIsLoading(true)
  
try {
    const res = await loginAction(data)
    if (res.success) {
      setIsLoading(false)
      router.push("/dashboard")
    }
    else{
      setIsLoading(false)
         console.log("error message",res.message);
      
    }
  } catch (error) {
    console.error("Login failed:", error)
    setIsLoading(false)
  }
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Fill in the form below to create your account
          </p>
        </div>



        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            {...form.register("email")}
          />
          {form.formState.errors.email && (
            <FieldDescription className="text-destructive">
              {form.formState.errors.email.message}
            </FieldDescription>
          )}
        </Field>

        {/* Password */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...form.register("password")}
          />
         
          {form.formState.errors.password && (
            <FieldDescription className="text-destructive">
              {form.formState.errors.password.message}
            </FieldDescription>
          )}
        </Field>

       
        {/* Submit */}
        <Field>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            
            {isLoading ?  <Loader2 className="animate-spin"/>  : "Login" }
           
          </Button>
        </Field>

        <FieldSeparator>Or continue with</FieldSeparator>

        {/* Google Sign Up */}
        <Field>
          <Button variant="outline" type="button">
            Login with Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/auth/signup">Sign up</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
