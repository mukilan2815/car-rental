import "./App.css";
import CarRentalHero from "./Components/Cardisplay";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import TestimonialCarousel from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <TestimonialCarousel />
      <CarRentalHero />
    </div>
  );
}

export default App;
