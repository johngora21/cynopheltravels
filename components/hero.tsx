"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Discover Tanzania's Wonders",
      subtitle: "Serengeti • Kilimanjaro • Zanzibar",
      description:
        "Experience the magic of East Africa with our expertly crafted safari adventures and luxury accommodations.",
    },
    {
      title: "Luxury Travel Experiences",
      subtitle: "Private • Groups • Couples",
      description:
        "From intimate honeymoon safaris to corporate retreats, we create unforgettable memories tailored to you.",
    },
    {
      title: "Complete Travel Solutions",
      subtitle: "Flights • Hotels • Packages",
      description:
        "Your one-stop destination for international flights, premium accommodations, and comprehensive travel packages.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-[90vh] md:h-screen overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
            filter: "brightness(0.4)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            {/* Animated Content */}
            <div key={currentSlide} className="animate-in slide-in-from-bottom-8 duration-1000">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <span className="text-white/90 text-xs font-poppins">Rated #1 in Tanzania</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins text-white mb-4 leading-tight">
                {slides[currentSlide].title}
              </h1>

              <p className="text-lg md:text-xl text-blue-200 font-medium font-poppins mb-6">
                {slides[currentSlide].subtitle}
              </p>

              <p className="text-base text-white/90 font-poppins mb-8 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium font-poppins transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  Explore Packages
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-full text-sm font-medium font-poppins transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-blue-400 w-6" : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
