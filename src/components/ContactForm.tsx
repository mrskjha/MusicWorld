'use client';
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: { target: { name: string; value: string }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className=" p-8 w-full  rounded-lg shadow-lg z-10">
      <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-white mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-gray-700  text-black focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 rounded-md border border-gray-700  text-black focus:border-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-white mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2 rounded-md border border-gray-700  text-black focus:border-blue-500 focus:outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
