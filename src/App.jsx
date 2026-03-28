// Root component — assembles all sections, layout, and floating WhatsApp button

import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { WaIcon } from './components/ui/WaIcon';
import { useReveal } from './hooks/useReveal';
import { WA } from './constants';

import { Hero } from './sections/Hero';
import { Ticker } from './sections/Ticker';
import { Problem } from './sections/Problem';
import { Services } from './sections/Services';
import { StatsBar } from './sections/StatsBar';

import { Portfolio } from './sections/Portfolio';
import { Process } from './sections/Process';
import { WhyUs } from './sections/WhyUs';

import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { CTA } from './sections/CTA';

export default function App() {
  useReveal();

  return (
    <>
      <div className="noise" />
      <Nav />
      <Hero />
      <Ticker />
      <Problem />
      <Services />
      <StatsBar />

      <Portfolio />
      <Process />
      <WhyUs />

      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <a href={WA} target="_blank" rel="noopener noreferrer" className="wa-float" title="Chat on WhatsApp">
        <WaIcon size={26} />
      </a>
    </>
  );
}
