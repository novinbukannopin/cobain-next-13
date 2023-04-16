import React from "react";
import Link from "next/link";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import MenuItem from "./component/MenuItem";

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
      <body className="container-lg px-7 mx-auto py-3">
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="https://flowbite.com" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Next
              </span>
            </a>
            <div className="flex items-center">
              <a
                href="tel:5541251234"
                className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
              >
                (555) 412-1234
              </a>
              <a
                href="#"
                className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </a>
            </div>
          </div>
        </nav>
        <nav className="bg-gray-50 dark:bg-gray-700">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
            <div className="flex items-center font-medium mt-0  text-sm justify-between">
              <div className="flex flex-row space-x-8">
                <MenuItem title="Homepage" address={"/"} />
                <MenuItem title="Settings" address={"/settings"} />
                <MenuItem title="Calculator" address={"/calculator"} />
              </div>
              <div className="bg-blue-700 text-white focus:outline-none  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-none text-sm px-4 py-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <MenuItem title="Search" address={"/search"} />
              </div>
            </div>
          </div>
        </nav>

        <div className="p-4  rounded-sm">{children}</div>
      </body>
    </html>
  );
}
