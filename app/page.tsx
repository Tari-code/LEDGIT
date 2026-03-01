import LandingHero from './components/LandingHero';
import LandingHowItWorks from './components/LandingHowItWorks';
import LandingFeatures from './components/LandingFeatures';
import LandingTrustSection from './components/LandingTrustSection';
import LandingCTA from './components/LandingCTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-950 overflow-x-hidden">
      <LandingHero />
      <LandingHowItWorks />
      <LandingFeatures />
      <LandingTrustSection />
      <LandingCTA />
      <Footer />
    </div>
  );
}
