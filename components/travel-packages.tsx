"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { User, Users, Briefcase, School, Crown, Mountain, Landmark, Leaf } from "lucide-react"

export default function TravelPackages() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activePackage, setActivePackage] = useState(0)

  const packages = [
    {
      id: 1,
      title: "Individual Travelers",
      icon: User,
      description:
        "Solo adventurers seeking unique experiences and personalized travel plans tailored to individual preferences.",
      features: [
        "Personalized Itineraries",
        "Flexible Scheduling",
        "Local Experiences",
        "Solo-friendly Accommodations",
      ],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 2,
      title: "Families",
      icon: Users,
      description:
        "Families looking for safe, enjoyable, and memorable vacations that cater to both adults and children.",
      features: ["Child-friendly Activities", "Family Accommodations", "Safety Measures", "Educational Experiences"],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-green-600 to-green-800",
    },
    {
      id: 3,
      title: "Corporate Clients",
      icon: Briefcase,
      description:
        "Businesses requiring efficient and organized travel solutions for meetings, conferences, and corporate events.",
      features: ["Meeting Arrangements", "Transport Logistics", "Corporate Rates", "Team Building Activities"],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-slate-600 to-slate-800",
    },
    {
      id: 4,
      title: "Groups",
      icon: School,
      description: "Groups such as school trips, friends, and organizations planning coordinated travel experiences.",
      features: ["Group Discounts", "Coordinated Logistics", "Custom Itineraries", "Shared Experiences"],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-amber-600 to-amber-800",
    },
    {
      id: 5,
      title: "Luxury Travelers",
      icon: Crown,
      description:
        "Clients looking for premium travel services, including luxury accommodations, exclusive tours, and VIP experiences.",
      features: ["5-Star Accommodations", "Private Tours", "Exclusive Access", "Premium Transport"],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-purple-600 to-purple-800",
    },
    {
      id: 6,
      title: "Adventure Seekers",
      icon: Mountain,
      description:
        "Travelers interested in thrilling activities such as safaris, hiking, diving, and other outdoor adventures.",
      features: ["Guided Expeditions", "Equipment Rental", "Safety Training", "Unique Experiences"],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-red-600 to-red-800",
    },
    {
      id: 7,
      title: "Cultural Enthusiasts",
      icon: Landmark,
      description: "Individuals passionate about exploring new cultures, heritage sites, and local traditions.",
      features: ["Cultural Tours", "Local Guides", "Historical Sites", "Authentic Experiences"],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-orange-600 to-orange-800",
    },
    {
      id: 8,
      title: "Eco-Tourists",
      icon: Leaf,
      description:
        "Clients who prioritize sustainable and eco-friendly travel options with minimal environmental impact.",
      features: ["Sustainable Stays", "Conservation Activities", "Responsible Tours", "Carbon Offsetting"],
      image: "/placeholder.svg?height=400&width=600",
      color: "from-emerald-600 to-emerald-800",
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })

      // Update active package indicator
      const cardWidth = 320 + 24 // card width + gap
      const newActive = Math.round((scrollTo + clientWidth / 2) / cardWidth)
      setActivePackage(Math.max(0, Math.min(newActive, packages.length - 1)))
    }
  }

  return (
    <section id="travel-types" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-4 text-xs font-medium font-poppins">
            Tailored For You
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-800 mb-4">
            Travel Packages For Every Type
          </h2>
          <p className="text-base text-slate-600 max-w-3xl mx-auto leading-relaxed font-poppins">
            We understand that different travelers have different needs. Explore our specialized packages designed for
            various types of travelers.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-700 rounded-full hidden md:flex shadow-md"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-blue-700 rounded-full hidden md:flex shadow-md"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Packages Slider */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 sm:px-0 snap-x scrollbar-hide"
            onScroll={() => {
              if (sliderRef.current) {
                const { scrollLeft, clientWidth } = sliderRef.current
                const cardWidth = 320 + 24 // card width + gap
                const newActive = Math.round((scrollLeft + clientWidth / 2) / cardWidth)
                setActivePackage(Math.max(0, Math.min(newActive, packages.length - 1)))
              }
            }}
          >
            {packages.map((pkg, index) => {
              const IconComponent = pkg.icon
              return (
                <Card
                  key={pkg.id}
                  className="group bg-white border-0 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 rounded-2xl flex-shrink-0 w-[280px] sm:w-[320px] snap-center"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-80`} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                      <IconComponent className="w-12 h-12 mb-3" />
                      <h3 className="text-xl font-bold font-poppins text-center">{pkg.title}</h3>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <p className="text-sm text-slate-600 mb-4 leading-relaxed font-poppins">{pkg.description}</p>

                    <div className="space-y-2 mb-5">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5`} />
                          <span className="text-xs text-slate-700 font-poppins">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium font-poppins py-2 rounded-full transform hover:scale-105 transition-all duration-300">
                      Explore Package
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {packages.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activePackage ? "bg-blue-600 w-6" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
