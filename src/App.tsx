import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Hours from './components/Hours';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-[#8B4513] text-[#F5F5DC] p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Bean & Brew</h1>
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#F5F5DC] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 left-0 w-full md:w-auto bg-[#8B4513] md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}>
            {['about', 'menu', 'hours', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-[#E8DCC5] transition-colors duration-200"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-grow">
        <Hero onScrollToMenu={() => scrollToSection('menu')} />
        <About />
        <Menu />
        <Hours />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;