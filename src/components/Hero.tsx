import React from 'react';

interface HeroProps {
  onScrollToMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToMenu }) => {
  return (
    <section className="bg-[#2F4F2F] text-[#F5F5DC] py-24 px-4 text-center">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Bean & Brew</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">Hand-crafted coffee since 2020</p>
        <button
          onClick={onScrollToMenu}
          className="btn btn-primary text-lg"
        >
          View Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;