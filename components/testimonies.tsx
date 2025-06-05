"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export default function Testimonies() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      category: "Family Vacation",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      text: "Cynophel Travels made our family safari in Tanzania absolutely magical. The attention to detail and care for our children's safety was exceptional. We saw the Big Five and created memories that will last a lifetime!",
      trip: "7-Day Serengeti Family Safari",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Singapore",
      category: "Solo Adventure",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      text: "As a solo traveler, I was initially nervous about visiting Tanzania. Cynophel's team took care of everything - from airport pickup to personalized itineraries. I felt safe and had the adventure of a lifetime climbing Kilimanjaro!",
      trip: "Kilimanjaro Solo Expedition",
      date: "January 2024",
    },
    {
      id: 3,
      name: "Emma & James Wilson",
      location: "London, UK",
      category: "Luxury Travel",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      text: "Our honeymoon in Zanzibar was pure perfection. The luxury accommodations, private beach dinners, and seamless service exceeded all expectations. Cynophel Travels truly understands luxury travel.",
      trip: "Zanzibar Luxury Honeymoon",
      date: "February 2024",
    },
    {
      id: 4,
      name: "Dr. Robert Martinez",
      location: "Madrid, Spain",
      category: "Corporate Travel",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      text: "Organizing our medical conference in Arusha was stress-free thanks to Cynophel. They handled all logistics, accommodations, and even arranged cultural activities for our international delegates. Highly professional!",
      trip: "Corporate Conference Package",
      date: "November 2023",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Toronto, Canada",
      category: "Eco-Tourism",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      text: "I'm passionate about sustainable travel, and Cynophel delivered exactly what I was looking for. The eco-lodges, conservation activities, and responsible tourism practices made this trip meaningful and impactful.",
      trip: "Sustainable Safari Experience",
      date: "October 2023",
    },
    {
      id: 6,
      name: "Adventure Club Munich",
      location: "Munich, Germany",
      category: "Group Travel",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      text: "Our group of 15 adventure enthusiasts had an incredible time! From white-water rafting to cultural village visits, every activity was perfectly coordinated. The group discounts made it affordable for everyone.",
      trip: "Adventure Group Package",
      date: "September 2023",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    } else {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Family Vacation": "bg-green-100 text-green-800",
      "Solo Adventure": "bg-blue-100 text-blue-800",
      "Luxury Travel": "bg-purple-100 text-purple-800",
      "Corporate Travel": "bg-slate-100 text-slate-800",
      "Eco-Tourism": "bg-emerald-100 text-emerald-800",
      "Group Travel": "bg-amber-100 text-amber-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section id="testimonies" className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-4 text-xs font-medium font-poppins">
            Client Stories
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white mb-4">What Our Travelers Say</h2>
          <p className="text-base text-blue-200 max-w-3xl mx-auto leading-relaxed font-poppins">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experiences with
            Cynophel Travels.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
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

          {/* Main Testimonial */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-2xl">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-12 h-12 text-blue-300 mx-auto mb-6" />

                      <p className="text-lg text-white mb-6 leading-relaxed font-poppins italic">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <div
                          className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-white/30"
                          style={{ backgroundImage: `url(${testimonial.image})` }}
                        />
                        <div className="text-left">
                          <h4 className="font-semibold text-white text-lg font-poppins">{testimonial.name}</h4>
                          <p className="text-blue-200 text-sm font-poppins">{testimonial.location}</p>
                          <p className="text-blue-300 text-xs font-poppins">{testimonial.date}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-center space-x-3">
                        <Badge
                          className={`${getCategoryColor(testimonial.category)} px-3 py-1 rounded-full text-xs font-poppins`}
                        >
                          {testimonial.category}
                        </Badge>
                        <Badge className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-poppins">
                          {testimonial.trip}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-blue-300 w-8" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto">
          {[
            { number: "500+", label: "Happy Clients" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "15+", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-white mb-1 font-poppins">{stat.number}</div>
              <div className="text-blue-200 text-sm font-poppins">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
