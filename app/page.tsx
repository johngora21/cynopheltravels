import Hero from "@/components/hero"
import Services from "@/components/services"
import TravelPackages from "@/components/travel-packages"
import FeaturedPackages from "@/components/featured-packages"
import About from "@/components/about"
import Testimonies from "@/components/testimonies"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-[100vh]">
      <Hero />
      <Services />
      <TravelPackages />
      <FeaturedPackages />
      <About />
      <Testimonies />
      <Contact />
      <Footer />
    </main>
  )
}
