import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2F4F2F] text-[#F5F5DC] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Bean & Brew</h2>
            <p className="text-sm opacity-80">Hand-crafted coffee since 2020</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" aria-label="Instagram" className="text-[#F5F5DC] hover:text-[#E8DCC5] transition-colors">
              Instagram
            </a>
            <a href="#" aria-label="Facebook" className="text-[#F5F5DC] hover:text-[#E8DCC5] transition-colors">
              Facebook
            </a>
            <a href="#" aria-label="Twitter" className="text-[#F5F5DC] hover:text-[#E8DCC5] transition-colors">
              Twitter
            </a>
          </div>
          <div className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Bean & Brew. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;