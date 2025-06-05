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
      title: "International Flights",
      description: "Premium flight booking services with competitive rates and flexible options worldwide.",
      features: ["24/7 Support", "Best Price Guarantee", "Flexible Booking"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Hotel,
      title: "Luxury Accommodations",
      description: "Handpicked hotels and lodges offering exceptional comfort and authentic experiences.",
      features: ["5-Star Properties", "Local Partnerships", "Special Rates"],
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: Users,
      title: "Group Adventures",
      description: "Customized group travel experiences for families, friends, and corporate teams.",
      features: ["Custom Itineraries", "Group Discounts", "Dedicated Guide"],
      color: "from-blue-700 to-blue-900",
    },
    {
      icon: Heart,
      title: "Romantic Getaways",
      description: "Intimate safari experiences and luxury retreats perfect for couples and honeymooners.",
      features: ["Private Safaris", "Romantic Dinners", "Spa Treatments"],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Briefcase,
      title: "Business Travel",
      description: "Professional travel management for corporate clients with seamless logistics.",
      features: ["Corporate Rates", "Travel Management", "Expense Reporting"],
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: MapPin,
      title: "Private Tours",
      description: "Exclusive private safaris and cultural experiences with personal guides.",
      features: ["Personal Guide", "Flexible Schedule", "VIP Treatment"],
      color: "from-blue-700 to-blue-900",
    },
  ]

  return (
    <section id="services" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-800 mb-4">Our Premium Services</h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed font-poppins">
            From international flights to luxury safaris, we provide comprehensive travel solutions tailored to create
            unforgettable experiences in Tanzania and beyond.
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
