import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Us Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold text-white">About Us</h3>
            <p className="text-sm mt-2">
              We are dedicated to providing the best music education and support to our students. Join us on a journey of musical discovery!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 mt-2">
              <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <p className="text-sm mt-2">Email: <a href="mailto:info@musicschool.com" className="hover:text-cyan-400 transition-colors">info@musicschool.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+1234567890" className="hover:text-cyan-400 transition-colors">(123) 456-7890</a></p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Music School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
