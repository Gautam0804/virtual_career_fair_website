import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import ResumeBuilderCTA from '../components/ResumeBuilderCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <ResumeBuilderCTA />
      <Footer />
    </>
  );
}
