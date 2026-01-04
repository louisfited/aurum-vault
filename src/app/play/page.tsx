"use client"
import { createClient } from '@/utils/supabase/client'


const Page = () => {
    const supabase = createClient()
  return (
    <div>Page


        <button onClick={()=> supabase.auth.signOut()} >sign out</button>
    </div>
  )
}

export default Page