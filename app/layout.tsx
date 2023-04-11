import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
        style={{ marginLeft: "30px", marginTop: "20px" }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "25px",
            listStyleType: "none",
          }}
        >
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/settings">Settings</Link>
          </li>
          <li>
            <Link href="/calculator">Calculator</Link>
          </li>
          <li>
            <Link href="/search">Search</Link>
          </li>
        </ul>
        <div className="" style={{ marginLeft: "40px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
