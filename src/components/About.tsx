import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-[#F5F5DC]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-[#2F4F2F]">Our Story</h2>
            <p className="text-[#6F4E37] mb-4 leading-relaxed">
              Bean & Brew began in 2020 with a simple mission: to serve exceptional coffee in a warm, welcoming space. 
              We source our beans from sustainable farms and roast them in-house to bring out their unique flavors.
            </p>
            <p className="text-[#6F4E37] leading-relaxed">
              Every cup is crafted with care by our passionate baristas. Whether you're starting your day or taking a moment to pause, 
              we invite you to slow down and savor the experience.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Coffee shop interior"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;