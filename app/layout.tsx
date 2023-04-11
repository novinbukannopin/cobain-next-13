import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ["400"],
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
            gap: "35px",
            listStyleType: "none",
          }}
        >
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/settings"
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/calculator"
            >
              Calculator
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/search"
            >
              Search
            </Link>
          </li>
        </ul>
        <div className={poppins.className} style={{ marginLeft: "40px" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
