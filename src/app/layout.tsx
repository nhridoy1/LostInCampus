import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/Header";
import React from "react";


export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}