import ComingSoonHero from './components/ComingSoonHero';
// import ConstructionImage from './components/ConstructionImage';
import FeatureCards from './components/FeatureCards';
import CountdownTimer from './components/CountdownTimer';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-slate-950">
      <ComingSoonHero />
      {/* <ConstructionImage /> */}
      <FeatureCards />
      <CountdownTimer />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}
