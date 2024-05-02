import Navbar from "./components/navbar.jsx";
import HeroSection from "./components/hero-section.jsx";
import Feature from "./components/feature.jsx";

function App() {
  return (
      <>
          <Navbar />
          <div className="max-w-6xl mx-auto pt-20 px-6">
              <HeroSection />
              <Feature />
          </div>
      </>
  )
}

export default App
