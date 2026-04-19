import React from 'react';

const Hours: React.FC = () => {
  return (
    <section id="hours" className="section bg-[#F5F5DC]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#2F4F2F]">Opening Hours</h2>
        <div className="max-w-md mx-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-[#C1B39E]">
                <td className="py-3 font-medium text-[#2F4F2F]">Monday - Friday</td>
                <td className="py-3 text-right text-[#6F4E37]">7:00 AM - 7:00 PM</td>
              </tr>
              <tr className="border-b border-[#C1B39E]">
                <td className="py-3 font-medium text-[#2F4F2F]">Saturday - Sunday</td>
                <td className="py-3 text-right text-[#6F4E37]">8:00 AM - 6:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Hours;