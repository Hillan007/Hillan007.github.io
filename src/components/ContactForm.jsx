import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with a backend or service like Formspree, EmailJS, etc.
  };

  return (
  <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      {submitted ? (
        <div className="text-green-600 text-center mb-4">Thank you! I will get back to you soon.</div>
      ) : null}
      <div className="mb-3">
        <label className="block mb-1">Name</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-2 py-1 border rounded text-sm" />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-2 py-1 border rounded text-sm" />
      </div>
      <div className="mb-3">
        <label className="block mb-1">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} required className="w-full px-2 py-1 border rounded text-sm" rows={3} />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700 text-sm">Send</button>
    </form>
  );
};

export default ContactForm;
