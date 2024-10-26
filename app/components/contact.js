"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Page = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Skånes bilproffs",
          from_email: form.email,
          to_email: "sallahitamer@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        console.log("Message sent successfully");
        setForm({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
      });
  };

  return (
    <main>
      <section className="testimonials py-12 md:py-20 bg-[url('/assets/challenger.jpg')] bg-cover bg-center text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Kontakta Oss</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white bg-opacity-90 p-4 md:p-8 rounded-lg shadow-lg text-black">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left mb-2">Namn:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-2 border border-gray-300 rounded text-black"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-left mb-2">E-post:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded text-black"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left mb-2">Meddelande:</label>
            <textarea
              id="message"
              name="message"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={isLoading}
          >
            {isLoading ? "Skickar..." : "Skicka Meddelande"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default Page;
