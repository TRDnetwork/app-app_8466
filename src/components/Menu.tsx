import React from 'react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

const menuItems: MenuItem[] = [
  {
    name: 'Espresso',
    description: 'Rich and bold single shot of concentrated coffee',
    price: '$3.00'
  },
  {
    name: 'Latte',
    description: 'Espresso with steamed milk and a light foam',
    price: '$4.50'
  },
  {
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and foam',
    price: '$4.75'
  },
  {
    name: 'Americano',
    description: 'Espresso diluted with hot water for a smooth taste',
    price: '$3.75'
  },
  {
    name: 'Mocha',
    description: 'Espresso with chocolate and steamed milk',
    price: '$5.25'
  },
  {
    name: 'Cold Brew',
    description: 'Smooth, slow-steeped coffee served over ice',
    price: '$4.25'
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="section bg-[#E8DCC5]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#2F4F2F]">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div key={index} className="card hover:border-[#6F4E37] hover:shadow-md">
              <h3 className="text-xl font-bold mb-2 text-[#2F4F2F]">{item.name}</h3>
              <p className="text-[#6F4E37] mb-3 text-sm leading-relaxed">{item.description}</p>
              <p className="text-[#8B4513] font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;