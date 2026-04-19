import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section bg-[#E8DCC5]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-8 text-[#2F4F2F]">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-[#6F4E37] font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-[#6F4E37] font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-[#6F4E37] font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-[#2F4F2F]">Contact Info</h3>
            <div className="space-y-4 text-[#6F4E37]">
              <div>
                <p className="font-medium">Address</p>
                <p>123 Coffee Lane, Brewville</p>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>hello@beanandbrew.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;