import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/Header";
import React from "react";
import 'app/global.css'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-200">
        <div className="flex flex-col min-h-screen max-w-[1500px] max-auto bg-white">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

