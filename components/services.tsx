"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, Hotel, Users, Heart, Briefcase, MapPin, ArrowRight, CheckCircle } from "lucide-react"

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Competitive rates on domestic and international flights with flexible booking options.",
      features: ["Domestic Flights", "International Routes", "Competitive Rates"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Hotel,
      title: "Accommodation Arrangements",
      description: "Professional booking services for hotels, resorts, and vacation rentals across Tanzania.",
      features: ["Hotels & Resorts", "Vacation Rentals", "Best Rate Guarantee"],
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: MapPin,
      title: "Transportation Services",
      description: "Comprehensive transport solutions including car rentals, transfers, and private charters.",
      features: ["Car Rentals", "Airport Transfers", "Private Charters"],
      color: "from-blue-700 to-blue-900",
    },
    {
      icon: Users,
      title: "Visa & Passport Assistance",
      description: "Expert guidance and support for visa applications and passport requirements.",
      features: ["Visa Processing", "Document Guidance", "Application Support"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Heart,
      title: "Travel Insurance",
      description: "Comprehensive travel insurance coverage and 24/7 assistance for peace of mind.",
      features: ["Medical Coverage", "Trip Protection", "24/7 Assistance"],
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Briefcase,
      title: "Boat & Air Transport",
      description: "Specialized logistics for boat transport and air transport coordination.",
      features: ["Boat Transport", "Air Logistics", "Custom Solutions"],
      color: "from-blue-700 to-blue-900",
    },
  ]

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-800 mb-4">Our Travel Services</h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed font-poppins">
            From flight bookings to travel insurance, we provide comprehensive travel services to ensure your journey is
            seamless and worry-free.
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:px-0 snap-x scrollbar-hide">
            <div className="flex gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={index}
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-xl border-0 bg-white rounded-2xl flex-shrink-0 w-[280px] sm:w-[320px] snap-center ${
                      hoveredCard === index ? "transform -translate-y-2" : ""
                    }`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-semibold font-poppins text-slate-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-sm text-slate-600 mb-5 leading-relaxed font-poppins">{service.description}</p>

                      <div className="space-y-2 mb-5">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            <span className="text-xs text-slate-700 font-poppins">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        variant="ghost"
                        className="group/btn text-blue-700 hover:text-blue-800 p-0 h-auto text-sm font-poppins"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-r from-white to-transparent h-full z-10 pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-l from-white to-transparent h-full z-10 pointer-events-none" />
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === 0 ? "bg-blue-600 w-6" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
