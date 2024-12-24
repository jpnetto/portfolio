import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        emailjs.send(
            'service_kh5gaf2', // Replace with your Service ID 
            'template_gzxc58h', // Replace with your Template ID
            formData,
            'PLej5n88wUnczlPkS' // Replace with your User ID
        ) .then((result) => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        }) .catch((error) => {
            alert('Failed to send message. Please try again later.');
            console.error('EmailJS Error:', error);
        });
    }; 
    

    return (
        <form onSubmit={handleSubmit} className="bg-black border-2 border-fireRed w-11/12 h-5/6 shadow shadow-fireRed rounded-lg p-6">
            <div className="flex justify-center">
                <h1 className="text-3xl text-white font-semibold">Send me an E-Mail!</h1>
            </div>
            <div className="my-6"> 
                <label htmlFor="name" className="block ml-2 font-mono text-gray-300">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 rounded bg-jet text-gray-300" required />
            </div>
            <div className="my-6">
                <label htmlFor="email" className="block ml-2 font-mono text-gray-300">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 rounded bg-jet text-gray-300" required />
            </div>
            <div className="my-6">
                <label htmlFor="message" className="block ml-2 font-mono text-gray-300">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 rounded bg-jet text-gray-300" rows="5" required />
            </div>
            <div className="flex justify-center mt-8">
                <button type="submit" className="bg-jet font-mono text-white w-2/3 h-20 rounded-lg hover:bg-fireRed transition duration-300"> Send Message </button>
            </div>
        </form>
    );
};

export default ContactForm;
