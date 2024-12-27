
"use client"

import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import contact from '../../../public/assets/contact.png';
import { axiosPrivateForm } from '@/app/lib/axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axiosPrivateForm.post('/contactus/contact-us', formData);

      const result = await response.json();
      if (response.ok) {
        toast.success(result.message || 'Form submitted successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
      } else {
        toast.error(result.message || 'Something went wrong!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex gap-6 bg-[#BABABA40] rounded-2xl px-6 py-6">
      <ToastContainer />
      <Image className="w-1/2" src={contact} alt="image" />
      <form className="w-1/2 flex flex-col px-6 gap-3" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <h1 className="text-[#AE8E50] text-[35px] font-[500]">Contact</h1>
          <p className="text-[14px] font-[400] text-[#000] mt-3 max-w-[355px]">
            Get in touch with one of the fastest emerging real estate brokers in Dubai. We are just a call away to help you with a stress-free process of property buying, selling, or renting in Dubai.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="py-3 bg-[#fff] px-3 rounded-md"
            type="text"
            name="name"
            placeholder="Full Name*"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="py-3 bg-[#fff] px-3 rounded-md"
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="py-3 bg-[#fff] px-3 rounded-md"
            type="text"
            name="phone"
            placeholder="Phone Number*"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            className="px-3 rounded-md"
            rows={7}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mt-12 flex flex-col gap-2">
          <button
            type="submit"
            className="bg-[#AE8E50] rounded-md text-white font-medium py-3 px-4 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
