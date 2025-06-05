import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Cynophel Travels - Premium Tanzania Travel & Safari Experiences",
  description:
    "Discover Tanzania with Cynophel Travels. Premium safari packages, luxury accommodations, international flights, and personalized travel experiences. Book your African adventure today.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
