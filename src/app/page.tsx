'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "InnovateAI - Modern AI Solutions";
    
    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#212529" /><stop offset="100%" stop-color="#4299E1" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    (faviconLink as HTMLLinkElement).href = faviconUrl;
  }, []);

  return (
    <div className="min-h-screen bg-[#212529] text-[#E9ECEF] font-['Inter'] antialiased">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight text-white">InnovateAI</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-[#4299E1] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#4299E1] transition-colors">About</a>
          <a href="#contact" className="hover:text-[#4299E1] transition-colors">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-[#E9ECEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full bg-[#212529] z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6 text-[#E9ECEF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 py-8">
          <a href="#hero" onClick={toggleMenu} className="text-xl hover:text-[#4299E1] transition-colors">Home</a>
          <a href="#about" onClick={toggleMenu} className="text-xl hover:text-[#4299E1] transition-colors">About</a>
          <a href="#contact" onClick={toggleMenu} className="text-xl hover:text-[#4299E1] transition-colors">Contact</a>
        </nav>
      </div>

      <main>
        <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6 animate-fade-in-up">
              Unleashing the Power of AI
            </h1>
            <p className="text-xl md:text-2xl text-[#E9ECEF] mb-10 opacity-0 animate-fade-in delay-200">
              InnovateAI is at the forefront of artificial intelligence, building solutions that redefine possibilities.
            </p>
            <button className="bg-[#4299E1] text-white px-8 py-4 rounded-full text-lg md:text-xl font-bold hover:bg-[#3182CE] transition-colors shadow-lg opacity-0 animate-fade-in delay-400">
              Learn More
            </button>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-24 text-center md:text-left">
          <h2 className="text-4xl font-bold text-white mb-8">
            About InnovateAI
          </h2>
          <p className="text-lg text-[#E9ECEF] leading-relaxed max-w-4xl mx-auto md:mx-0">
            InnovateAI is a pioneering AI startup dedicated to developing cutting-edge artificial intelligence solutions. Our mission is to transform industries and enhance daily life through intelligent technology. We focus on research, development, and deployment of robust AI models that deliver real-world impact.
          </p>
        </section>

        <section id="contact" className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Get in Touch
          </h2>
          <div className="space-y-4 text-lg text-[#E9ECEF] mb-8">
            <p>Email: <a href="mailto:test@innovate.ai" className="text-[#4299E1] hover:underline">test@innovate.ai</a></p>
            <p>Phone: <a href="tel:+123456789" className="text-[#4299E1] hover:underline">123 456 789</a></p>
          </div>
          <p className="text-md text-gray-400">
            We look forward to hearing from you and discussing how AI can empower your vision.
          </p>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">
        Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-[#4299E1] hover:underline">DigitalFusion</a>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800&display=swap');

        html {
          scroll-behavior: smooth;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
