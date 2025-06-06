"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { User, Users, Briefcase, School, Crown, Mountain, Landmark, Leaf } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TravelPackages() {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activePackage, setActivePackage] = useState(0)
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)

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

  const handleBookNow = (packageId: number) => {
    setSelectedPackage(packageId)
  }

  const handleCloseDialog = () => {
    setSelectedPackage(null)
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

      <Dialog open={selectedPackage !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-slate-800">
              Book {selectedPackage !== null ? packages[selectedPackage].title : ''} Package
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Fill out the form below to book this travel package. We'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Common fields for all packages */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                placeholder="Your name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your phone number"
                className="col-span-3"
              />
            </div>

            {/* Package-specific fields */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="travelDate" className="text-right">
                Preferred Travel Date
              </Label>
              <Input
                id="travelDate"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="duration" className="text-right">
                Duration
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-5">3-5 Days</SelectItem>
                  <SelectItem value="6-8">6-8 Days</SelectItem>
                  <SelectItem value="9-12">9-12 Days</SelectItem>
                  <SelectItem value="13+">13+ Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="groupSize" className="text-right">
                Group Size
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select group size" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Person' : 'People'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="accommodation" className="text-right">
                Accommodation Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select accommodation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="comfort">Comfort</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Special Requirements
              </Label>
              <Textarea
                id="message"
                placeholder="Any special requirements or preferences"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button
              variant="outline"
              onClick={handleCloseDialog}
              className="text-slate-600"
            >
              Cancel
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit Booking
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
