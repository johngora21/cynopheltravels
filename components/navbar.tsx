"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1
                className={`text-lg font-semibold font-poppins transition-colors duration-300 ${
                  isScrolled ? "text-slate-800" : "text-white"
                }`}
              >
                Cynophel Travels
              </h1>
              <p
                className={`text-xs font-poppins transition-colors duration-300 ${
                  isScrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                Tanzania Adventures
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-5">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "#services" },
              { name: "Packages", href: "#travel-types" },
              { name: "Sustainability", href: "/sustainability" },
              { name: "Testimonies", href: "#testimonies" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-poppins text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled ? "text-slate-700 hover:text-blue-700" : "text-white hover:text-blue-200"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full text-sm font-poppins transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-slate-800" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-slate-800" : "text-white"}`} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-3">
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "#services" },
              { name: "Packages", href: "#travel-types" },
              { name: "Sustainability", href: "/sustainability" },
              { name: "Testimonies", href: "#testimonies" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 font-poppins text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white rounded-full text-sm font-poppins">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
