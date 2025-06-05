"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Globe, Heart, CheckCircle } from "lucide-react"

export default function About() {
  const stats = [
    { icon: Users, number: "10,000+", label: "Happy Travelers", color: "text-blue-600" },
    { icon: Award, number: "15+", label: "Years Experience", color: "text-blue-700" },
    { icon: Globe, number: "50+", label: "Destinations", color: "text-blue-800" },
    { icon: Heart, number: "98%", label: "Satisfaction Rate", color: "text-blue-900" },
  ]

  const values = [
    {
      title: "Authentic Experiences",
      description:
        "We create genuine connections with local communities and wildlife, ensuring every moment is meaningful and respectful.",
    },
    {
      title: "Sustainable Tourism",
      description:
        "Our commitment to conservation and community development ensures your travels contribute positively to Tanzania.",
    },
    {
      title: "Personalized Service",
      description:
        "Every journey is tailored to your preferences, creating unique adventures that exceed your expectations.",
    },
    {
      title: "Expert Knowledge",
      description:
        "Our local guides and travel specialists bring decades of experience and deep cultural understanding.",
    },
  ]

  return (
    <section id="about" className="py-16 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-5 text-xs font-medium font-poppins">
              About Cynophel Travels
            </Badge>

            <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-800 mb-5 leading-tight">
              Your Gateway to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Extraordinary
              </span>{" "}
              Adventures
            </h2>

            <p className="text-base text-slate-600 mb-6 leading-relaxed font-poppins">
              Based in the heart of Tanzania, we are passionate local experts dedicated to sharing the incredible beauty
              and rich culture of our homeland with travelers from around the world.
            </p>

            <div className="space-y-4 mb-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1 text-sm font-poppins group-hover:text-blue-700 transition-colors duration-300">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed text-sm font-poppins">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-slate-800 text-sm font-poppins">TripAdvisor Excellence Award</p>
                <p className="text-xs text-slate-600 font-poppins">Consistently rated #1 in Tanzania</p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-500 border-0 bg-white hover:-translate-y-1 rounded-xl"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className={`text-xl font-bold mb-1 ${stat.color} font-poppins`}>{stat.number}</div>
                    <div className="text-slate-600 font-medium text-sm font-poppins">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
