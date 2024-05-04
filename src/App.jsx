import Navbar from "./components/navbar.jsx";
import HeroSection from "./components/hero-section.jsx";
import Feature from "./components/feature.jsx";
import Workflow from "./components/workflow.jsx";
import Pricing from "./components/pricing.jsx";
import Testimonials from "./components/testimonials.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
      <>
          <Navbar />
          <div className="max-w-6xl mx-auto pt-20 px-6">
              <HeroSection />
              <Feature />
              <Workflow />
              <Pricing />
              <Testimonials />
              <Footer />
          </div>
      </>
  )
}

export default App
