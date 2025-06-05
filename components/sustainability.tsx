"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Users, Heart, TreePine, Recycle, Globe, HandHeart, ArrowRight } from "lucide-react"

export default function Sustainability() {
  const initiatives = [
    {
      icon: Leaf,
      title: "Eco-Friendly Initiatives",
      description:
        "We actively participate in and support various eco-friendly initiatives, such as beach clean-up events, conservation projects, and wildlife protection programs.",
      features: [
        "Beach Clean-up Events",
        "Conservation Projects",
        "Wildlife Protection Programs",
        "Client Participation Programs",
      ],
      color: "from-green-500 to-green-700",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description:
        "We believe in giving back to the communities that host our travelers. We support local businesses, artisans, and cultural initiatives.",
      features: [
        "Local Business Support",
        "Cultural Exchange Programs",
        "Educational Initiatives",
        "Community Development Projects",
      ],
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Heart,
      title: "Social Responsibility",
      description:
        "We are dedicated to upholding ethical business practices and maintaining high standards of corporate governance.",
      features: [
        "Ethical Business Practices",
        "Corporate Governance",
        "Employee Welfare",
        "Inclusive Travel Experiences",
      ],
      color: "from-purple-500 to-purple-700",
    },
  ]

  const commitments = [
    {
      icon: TreePine,
      title: "Environmental Protection",
      description: "Minimal environmental impact through eco-friendly partners and sustainable practices.",
    },
    {
      icon: Recycle,
      title: "Sustainable Tourism",
      description: "Promoting responsible travel that preserves natural beauty for future generations.",
    },
    {
      icon: Globe,
      title: "Local Economy Support",
      description: "Ensuring tourism benefits local communities and economies.",
    },
    {
      icon: HandHeart,
      title: "Community Development",
      description: "Contributing to educational and development projects in host communities.",
    },
  ]

  return (
    <section id="sustainability" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full mb-4 text-xs font-medium font-poppins">
            Our Commitment
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-800 mb-4">
            Sustainability & Corporate Responsibility
          </h2>
          <p className="text-base text-slate-600 max-w-4xl mx-auto leading-relaxed font-poppins">
            At Cynophel, we are committed to promoting sustainable tourism practices. We work with eco-friendly partners
            and prioritize accommodations, tours, and transportation options that have minimal environmental impact.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-green-600 to-blue-600 border-0 rounded-2xl overflow-hidden">
            <CardContent className="p-8 text-center text-white">
              <Leaf className="w-16 h-16 mx-auto mb-4 text-green-200" />
              <h3 className="text-xl font-bold font-poppins mb-4">Our Mission</h3>
              <p className="text-lg leading-relaxed font-poppins">
                Our goal is to preserve the natural beauty of the destinations we serve while ensuring a positive
                experience for our clients. We encourage our travelers to join us in making a positive impact on the
                environment and local communities.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Commitments */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {commitments.map((commitment, index) => {
            const IconComponent = commitment.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-500 border-0 bg-white hover:-translate-y-1 rounded-xl"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm font-poppins group-hover:text-green-700 transition-colors duration-300">
                    {commitment.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-poppins">{commitment.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Detailed Initiatives */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {initiatives.map((initiative, index) => {
            const IconComponent = initiative.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 border-0 bg-white rounded-2xl overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${initiative.color}`} />
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${initiative.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-semibold font-poppins text-slate-800 mb-3 group-hover:text-green-700 transition-colors duration-300">
                    {initiative.title}
                  </h3>

                  <p className="text-sm text-slate-600 mb-5 leading-relaxed font-poppins">{initiative.description}</p>

                  <div className="space-y-2 mb-5">
                    {initiative.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
                        <span className="text-xs text-slate-700 font-poppins">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="group/btn text-green-700 hover:text-green-800 p-0 h-auto text-sm font-poppins"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Impact Statistics */}
        <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold font-poppins mb-2">Our Impact in Numbers</h3>
            <p className="text-green-100 font-poppins">Making a difference through sustainable tourism</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "Conservation Projects Supported" },
              { number: "200+", label: "Local Businesses Partnered" },
              { number: "15", label: "Community Schools Sponsored" },
              { number: "95%", label: "Eco-Friendly Accommodations" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold mb-1 font-poppins">{stat.number}</div>
                <div className="text-green-100 text-sm font-poppins">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold font-poppins text-slate-800 mb-4">Join Us in Making a Difference</h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto font-poppins">
            When you travel with Cynophel, you're not just exploring beautiful destinations – you're contributing to
            their preservation and the wellbeing of local communities.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium font-poppins transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Plan Your Sustainable Journey
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
