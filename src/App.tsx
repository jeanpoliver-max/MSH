/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] scroll-smooth">
      <Header />
      <main>
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
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  );
}
