import Navbar from "./components/navbar.jsx";
import HeroSection from "./components/hero-section.jsx";
import Feature from "./components/feature.jsx";
import Workflow from "./components/workflow.jsx";
import Pricing from "./components/pricing.jsx";

function App() {
  return (
      <>
          <Navbar />
          <div className="max-w-6xl mx-auto pt-20 px-6">
              <HeroSection />
              <Feature />
              <Workflow />
              <Pricing />
          </div>
      </>
  )
}

export default App
