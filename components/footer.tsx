import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Cynophel Travels</h3>
            <p className="text-slate-300 text-sm mb-4 font-poppins">
              Your trusted partner for extraordinary adventures in Tanzania and beyond. We specialize in creating
              unforgettable travel experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Packages", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-poppins"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Popular Destinations</h3>
            <ul className="space-y-2">
              {[
                "Serengeti National Park",
                "Mount Kilimanjaro",
                "Zanzibar Island",
                "Ngorongoro Crater",
                "Tarangire National Park",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-poppins">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-poppins">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-slate-300 text-sm font-poppins">info@cynophel.co.tz</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-slate-300 text-sm font-poppins">+255 123 456 789</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                <span className="text-slate-300 text-sm font-poppins">
                  Serengeti Road, Plot 123
                  <br />
                  Arusha, Tanzania
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-xs font-poppins">
            © {currentYear} Cynophel Travels. All rights reserved. | Designed with ❤️ for Tanzania
          </p>
        </div>
      </div>
    </footer>
  )
}
