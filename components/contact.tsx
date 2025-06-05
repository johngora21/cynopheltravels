"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["Arusha, Tanzania", "Serengeti Road, Plot 123"],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+255 123 456 789", "+255 987 654 321"],
      color: "text-blue-700",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@cynophel.co.tz", "bookings@cynophel.co.tz"],
      color: "text-blue-800",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      color: "text-blue-900",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-white mb-4">Start Your Adventure Today</h2>
          <p className="text-base text-blue-200 max-w-3xl mx-auto leading-relaxed font-poppins">
            Ready to explore Tanzania? Get in touch with our travel experts to plan your perfect safari adventure. We're
            here to make your dreams come true.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 rounded-xl"
                  >
                    <CardContent className="p-5">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mb-3`}
                      >
                        <IconComponent className={`w-5 h-5 text-white`} />
                      </div>
                      <h4 className="font-semibold text-white mb-2 text-sm font-poppins">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-blue-100 text-xs font-poppins">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Map or Image */}
            <Card className="overflow-hidden rounded-xl border-0">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('/placeholder.svg?height=400&width=600')` }}
              />
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-white border-0 shadow-xl rounded-xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-5 font-poppins">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 font-poppins">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border border-slate-200 focus:border-blue-500 rounded-full py-2 text-sm font-poppins"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1 font-poppins">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border border-slate-200 focus:border-blue-500 rounded-full py-2 text-sm font-poppins"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 font-poppins">Email Address *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border border-slate-200 focus:border-blue-500 rounded-full py-2 text-sm font-poppins"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 font-poppins">
                    Tell Us About Your Dream Trip *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="border border-slate-200 focus:border-blue-500 rounded-xl min-h-[120px] text-sm font-poppins"
                    placeholder="Describe your ideal safari experience, travel dates, group size, and any special requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-sm font-medium font-poppins transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message & Get Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
