"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plane, Hotel, Users, Heart, Briefcase, MapPin, ArrowRight, CheckCircle, ChevronLeft, ChevronRight, X, Calendar } from "lucide-react"
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

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320 // Width of one card
      const currentScroll = scrollContainerRef.current.scrollLeft
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const cardWidth = 320 // Width of one card
        const newIndex = Math.round(scrollLeft / cardWidth)
        setActiveIndex(newIndex)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
  ]

  const handleBookNow = (index: number) => {
    setSelectedService(index)
  }

  const handleCloseDialog = () => {
    setSelectedService(null)
  }

  const getServiceSpecificFields = (serviceIndex: number) => {
    switch (serviceIndex) {
      case 0: // Flight Bookings
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="departure" className="text-right">
                Departure City
              </Label>
              <Input
                id="departure"
                placeholder="e.g., Dar es Salaam"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="arrival" className="text-right">
                Arrival City
              </Label>
              <Input
                id="arrival"
                placeholder="e.g., Zanzibar"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="departureDate" className="text-right">
                Departure Date
              </Label>
              <Input
                id="departureDate"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="returnDate" className="text-right">
                Return Date
              </Label>
              <Input
                id="returnDate"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="passengers" className="text-right">
                Passengers
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select number of passengers" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Passenger' : 'Passengers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )
      case 1: // Accommodation Arrangements
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="propertyType" className="text-right">
                Property Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select property type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hotel">Hotel</SelectItem>
                  <SelectItem value="resort">Resort</SelectItem>
                  <SelectItem value="lodge">Lodge</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="guesthouse">Guesthouse</SelectItem>
                  <SelectItem value="camp">Camp</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="location" className="text-right">
                Location
              </Label>
              <Input
                id="location"
                placeholder="e.g., Zanzibar Beach Resort"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="checkIn" className="text-right">
                Check-in Date
              </Label>
              <Input
                id="checkIn"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="checkOut" className="text-right">
                Check-out Date
              </Label>
              <Input
                id="checkOut"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="guests" className="text-right">
                Number of Guests
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select number of guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="roomType" className="text-right">
                Room Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard Room</SelectItem>
                  <SelectItem value="deluxe">Deluxe Room</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )
      case 2: // Transportation Services
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pickupLocation" className="text-right">
                Pickup Location
              </Label>
              <Input
                id="pickupLocation"
                placeholder="e.g., Airport Terminal 1"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dropoffLocation" className="text-right">
                Drop-off Location
              </Label>
              <Input
                id="dropoffLocation"
                placeholder="e.g., Hotel Name"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pickupDate" className="text-right">
                Pickup Date
              </Label>
              <Input
                id="pickupDate"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pickupTime" className="text-right">
                Pickup Time
              </Label>
              <Input
                id="pickupTime"
                type="time"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="vehicleType" className="text-right">
                Vehicle Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select vehicle type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sedan">Sedan</SelectItem>
                  <SelectItem value="suv">SUV</SelectItem>
                  <SelectItem value="van">Van</SelectItem>
                  <SelectItem value="luxury">Luxury Vehicle</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )
      case 3: // Visa & Passport Assistance
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nationality" className="text-right">
                Nationality
              </Label>
              <Input
                id="nationality"
                placeholder="Your nationality"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="passportNumber" className="text-right">
                Passport Number
              </Label>
              <Input
                id="passportNumber"
                placeholder="Your passport number"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="passportExpiry" className="text-right">
                Passport Expiry
              </Label>
              <Input
                id="passportExpiry"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="visaType" className="text-right">
                Visa Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select visa type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tourist">Tourist Visa</SelectItem>
                  <SelectItem value="business">Business Visa</SelectItem>
                  <SelectItem value="transit">Transit Visa</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="travelDate" className="text-right">
                Travel Date
              </Label>
              <Input
                id="travelDate"
                type="date"
                className="col-span-3"
              />
            </div>
          </>
        )
      case 4: // Travel Insurance
        return (
          <>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tripStart" className="text-right">
                Trip Start Date
              </Label>
              <Input
                id="tripStart"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="tripEnd" className="text-right">
                Trip End Date
              </Label>
              <Input
                id="tripEnd"
                type="date"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="destination" className="text-right">
                Destination
              </Label>
              <Input
                id="destination"
                placeholder="e.g., Tanzania"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="coverageType" className="text-right">
                Coverage Type
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select coverage type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic Coverage</SelectItem>
                  <SelectItem value="standard">Standard Coverage</SelectItem>
                  <SelectItem value="premium">Premium Coverage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="travelers" className="text-right">
                Number of Travelers
              </Label>
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select number of travelers" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} {num === 1 ? 'Traveler' : 'Travelers'}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </>
        )
      default:
        return null
    }
  }

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

        <div className="relative group">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 sm:px-0 snap-x scrollbar-hide scroll-smooth"
          >
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
                        onClick={() => handleBookNow(index)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full text-sm font-medium font-poppins transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-r from-white to-transparent h-full z-10 pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 bg-gradient-to-l from-white to-transparent h-full z-10 pointer-events-none" />
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {services.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-blue-600 w-6" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedService !== null} onOpenChange={handleCloseDialog}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-slate-800">
              Book {selectedService !== null ? services[selectedService].title : ''}
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Fill out the form below to book this service. We'll get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {/* Common fields for all services */}
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

            {/* Service-specific fields */}
            {selectedService !== null && getServiceSpecificFields(selectedService)}

            {/* Additional notes */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="message" className="text-right">
                Additional Notes
              </Label>
              <Textarea
                id="message"
                placeholder="Any additional information or special requirements"
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
