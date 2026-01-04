"use server"

import { createSupabaseServerClient } from "@/utils/supabase/server"
import { loginSchema, signupSchema } from "../schemas/auth-schemas"
import { loginFormType, signupFormType } from "@/utils/types/auth-types"
import { success } from "zod"

export async function createAccountAction(formData: signupFormType):Promise<{success:boolean,message:string}> {
    const supabase =await createSupabaseServerClient()
  

    
    const { data, error: parsingError } = signupSchema?.safeParse({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password,

    })


  
    if (parsingError) {
      return {
        success:false,
        message: 'Invalid input',
      }
    }
  
    const { error: signupError, data: newUserData } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
        fullName:data.fullName
     
        },
      },
    })
  
    if (signupError) {
      console.error('error', signupError)
      return {
        success: false,
        message: signupError.message || 'An error occurred',
      }
    }

  

  
  
    return {
      success: true,
      message: 'Account created',
    }
  }
  


  export const loginAction  = async(formData:loginFormType):Promise<{success:boolean,message:string}>=>{
    const supabase =await createSupabaseServerClient()
  
    const { data, error: parsingError } = loginSchema?.safeParse({
     
      email: formData.email,
      password: formData.password,

    })


    if (parsingError) {
      return {
        success:false,
        message: 'Invalid input',
      }
    }



    
  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword(data)

  console.log(error);
  
  if (error) {
    return {
      success: false,
      message: 'Invalid email or password',
    }
  }



  return {
    success:true,
    message:"logged in successfully"
  }


  }


  export const signout = async()=>{
    const supabase =await createSupabaseServerClient()

    const {error} = await supabase.auth.signOut()

    if (error) {
      return {
        success:false,
        message:"an error occured"
      }
    }


    return {
      success:true,
      message:"successfully logged out"
    }

  }