"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { z } from "zod";
import { signupSchema } from "@/libs/schemas/auth-schemas";
import { createAccountAction } from "@/libs/actions/auth-actions";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

const extendedSignupSchema = signupSchema
  .extend({
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string>("");
  const form = useForm<z.infer<typeof extendedSignupSchema>>({
    resolver: zodResolver(extendedSignupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(data: z.infer<typeof extendedSignupSchema>) {
    console.log("Form submitted:", data);
    setIsLoading(true);
    try {
      const res = await createAccountAction({
        fullName: data.fullName,
        password: data.password,
        email: data.email,
      });

      if (res.success) {
        setIsLoading(false);
        router.push("/auth/signin");
      } else {
        setIsLoading(false);
        console.log("error message", res.message);
        setErrorMsg(res.message);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setErrorMsg("unable to process request at the moment");
    }
  }

  const handleGoogleSignup = async () => {
    if (!siteUrl) {
      alert("no url");
      return;
    }
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${siteUrl}/auth/balance`,
      },
    });
  };

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

        <div>
          {errorMsg ? <p className="text-red-500"> {errorMsg}</p> : null}
        </div>
        {/* Full Name */}

        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input
            id="fullName"
            type="text"
            placeholder="John Doe"
            {...form.register("fullName")}
          />
          {form.formState.errors.fullName && (
            <FieldDescription className="text-destructive">
              {form.formState.errors.fullName.message}
            </FieldDescription>
          )}
        </Field>

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

        {/* Confirm Password */}
        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="••••••••"
            {...form.register("confirmPassword")}
          />
          {form.formState.errors.confirmPassword && (
            <FieldDescription className="text-destructive">
              {form.formState.errors.confirmPassword.message}
            </FieldDescription>
          )}
        </Field>

        {/* Submit */}
        <Field>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Create Account"
            )}
          </Button>
        </Field>

        <FieldSeparator>Or continue with</FieldSeparator>

        {/* Google Sign Up */}
        <Field>
          <Button onClick={handleGoogleSignup} variant="outline" type="button">
            Sign up with Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Already have an account? <Link href="/auth/signin">Sign in</Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
