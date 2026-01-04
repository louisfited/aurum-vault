import AppSidebar from "@/components/dashboard-components/appsidebar";
import DashboardNavbar from "@/components/dashboard-components/dashboard-navbar";

import { Metadata } from "next";
import { cookies } from "next/headers";


export const metadata: Metadata = {
    title: "Aurum",
    description: "dashboard",
  };
  
  export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {


      const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
    return (
    
      
            <div className="flex w-full">

          <AppSidebar/>
          <main className=" h-screen w-full  ">
            <DashboardNavbar/>
            <div className="px-4">
                {children}
            </div>
          </main>
            </div>
    
    );
  }
  