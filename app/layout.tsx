import React from "react";

export default function Layout({ children } : {children: React.ReactNode}) {
  return (
    <html>
      <body>
        <header>Mahmud Blog Page</header>
        <main>{children}</main>
        <footer>My Footer</footer>
      </body>
    </html>
  )
}