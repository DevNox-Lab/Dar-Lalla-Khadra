import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import PeakReservationSection from "./components/PeakReservationSection";
import ReservationForm from "./components/ReservationForm";
import ExperienceSection from "./components/ExperienceSection";
import MenuSection from "./components/MenuSection";
import PrivateDiningSection from "./components/PrivateDiningSection";
import AccessibilitySection from "./components/AccessibilitySection";
import ReviewsSection from "./components/ReviewsSection";
import HospitalitySection from "./components/HospitalitySection";
import LocationSection from "./components/LocationSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#faf7f2", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <TrustStats />
      <PeakReservationSection />
      <ReservationForm />
      <ExperienceSection />
      <MenuSection />
      <PrivateDiningSection />
      <AccessibilitySection />
      <ReviewsSection />
      <HospitalitySection />
      <LocationSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
