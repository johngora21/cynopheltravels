import Hero from "@/components/hero"
import Services from "@/components/services"
import FeaturedPackages from "@/components/featured-packages"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <FeaturedPackages />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
