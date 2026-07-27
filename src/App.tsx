/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImpactNumbers from './components/ImpactNumbers';
import TwoPaths from './components/TwoPaths';
import Services from './components/Services';
import Differentials from './components/Differentials';
import WhyChooseUs from './components/WhyChooseUs';
import Structure from './components/Structure';
import Clients from './components/Clients';
import About from './components/About';
import Ombudsman from './components/Ombudsman';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';
import TermsOfUse from './components/TermsOfUse';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      if (hash === '#termos' || hash === '' || hash === '#inicio') {
        window.scrollTo(0, 0);
      } else {
        // Allow a short delay for React to render the main components if coming from privacy page
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isTermsOfUse = currentHash === '#termos';

  return (
    <div className="min-h-screen bg-[#F3F4F6] scroll-smooth flex flex-col">
      <Header />
      <main className="flex-grow">
        {isTermsOfUse ? (
          <TermsOfUse />
        ) : (
          <>
            <Hero />
            <ImpactNumbers />
            <TwoPaths />
            <Services />
            <Differentials />
            <WhyChooseUs />
            <Structure />
            <Clients />
            <About />
            <Ombudsman />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}
