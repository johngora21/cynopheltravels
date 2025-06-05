"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Star, Clock, ArrowRight, Heart, ChevronLeft, ChevronRight } from "lucide-react"

export default function FeaturedPackages() {
  const [likedPackages, setLikedPackages] = useState<number[]>([])
  const sliderRef = useRef<HTMLDivElement>(null)

  const packages = [
    {
      id: 1,
      title: "Serengeti Safari Spectacular",
      location: "Serengeti National Park",
      duration: "7 Days / 6 Nights",
      groupSize: "2-8 People",
      price: "$2,850",
      originalPrice: "$3,200",
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Big Five Safari", "Luxury Tented Camp", "Professional Guide", "All Meals Included"],
      availableDates: "Mar 15 - Apr 30, 2024",
      badge: "Best Seller",
      badgeColor: "bg-emerald-500",
    },
    {
      id: 2,
      title: "Kilimanjaro Summit Adventure",
      location: "Mount Kilimanjaro",
      duration: "8 Days / 7 Nights",
      groupSize: "4-12 People",
      price: "$3,450",
      originalPrice: "$3,800",
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Machame Route", "Expert Guides", "All Equipment", "Success Guarantee"],
      availableDates: "Jun 1 - Sep 30, 2024",
      badge: "Adventure",
      badgeColor: "bg-blue-500",
    },
    {
      id: 3,
      title: "Zanzibar Beach Paradise",
      location: "Zanzibar Island",
      duration: "5 Days / 4 Nights",
      groupSize: "2-6 People",
      price: "$1,950",
      originalPrice: "$2,300",
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Beachfront Resort", "Spice Tour", "Snorkeling", "Cultural Experience"],
      availableDates: "Year Round",
      badge: "Romantic",
      badgeColor: "bg-rose-500",
    },
    {
      id: 4,
      title: "Ngorongoro Crater Explorer",
      location: "Ngorongoro Conservation Area",
      duration: "4 Days / 3 Nights",
      groupSize: "2-10 People",
      price: "$2,200",
      originalPrice: "$2,500",
      rating: 4.7,
      reviews: 94,
      image: "/placeholder.svg?height=400&width=600",
      features: ["Crater Floor Safari", "Maasai Village", "Luxury Lodge", "Photography Focus"],
      availableDates: "May 1 - Nov 30, 2024",
      badge: "Limited",
      badgeColor: "bg-amber-500",
    },
  ]

  const toggleLike = (packageId: number) => {
    setLikedPackages((prev) =>
      prev.includes(packageId) ? prev.filter((id) => id !== packageId) : [...prev, packageId],
    )
  }

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section id="packages" className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white mb-4">Featured Safari Packages</h2>
          <p className="text-base text-blue-200 max-w-3xl mx-auto leading-relaxed font-poppins">
            Discover our carefully curated safari experiences, available for limited periods. Book now to secure your
            spot on these extraordinary adventures.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full hidden md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full hidden md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Packages Slider */}
          <div ref={sliderRef} className="flex overflow-x-auto gap-6 pb-8 -mx-4 px-4 sm:px-0 snap-x scrollbar-hide">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className="group bg-white border-0 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 rounded-2xl flex-shrink-0 w-[300px] sm:w-[340px] snap-center"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge */}
                  <Badge
                    className={`absolute top-4 left-4 ${pkg.badgeColor} text-white px-3 py-1 text-xs font-medium font-poppins rounded-full`}
                  >
                    {pkg.badge}
                  </Badge>

                  {/* Like Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full"
                    onClick={() => toggleLike(pkg.id)}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors duration-300 ${
                        likedPackages.includes(pkg.id) ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                  </Button>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 text-right">
                    <div className="text-white/80 text-xs line-through font-poppins">{pkg.originalPrice}</div>
                    <div className="text-white text-lg font-bold font-poppins">{pkg.price}</div>
                    <div className="text-white/90 text-xs font-poppins">per person</div>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-base font-semibold font-poppins text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                      {pkg.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-blue-500 text-blue-500" />
                      <span className="text-slate-700 text-xs font-semibold font-poppins">{pkg.rating}</span>
                      <span className="text-slate-500 text-xs font-poppins">({pkg.reviews})</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-3 text-xs text-slate-600 font-poppins">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-blue-600" />
                      <span className="truncate">{pkg.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-blue-600" />
                      <span className="truncate">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-blue-600" />
                      <span>{pkg.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-blue-600" />
                      <span className="text-xs truncate">{pkg.availableDates}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {pkg.features.map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-[10px] font-poppins bg-slate-100 text-slate-700 rounded-full"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium font-poppins py-2 rounded-full transform hover:scale-105 transition-all duration-300">
                      Book Now
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4 py-2 rounded-full border text-xs font-medium font-poppins hover:bg-slate-50 transition-all duration-300"
                    >
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === 0 ? "bg-blue-300 w-6" : "bg-blue-700"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full text-sm font-medium font-poppins transform hover:scale-105 transition-all duration-300"
          >
            View All Packages
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
