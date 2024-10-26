"use client"; // For React-specific functionality

import Head from 'next/head';
import { useState } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      src: "/assets/home.jpg",
      alt: "Slide 1",
     
    },
    {
      src: "/assets/car3.jpg",
      alt: "Slide 2",
     
    },
    {
      src: "/assets/car2.jpg",
      alt: "Slide 3",
     
    },

  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Head>
        <title>Skånes bilproffs</title>
        <meta name="description" content="Professionella bilmekanikertjänster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        {/* Hero Section */}
        <section className="hero bg-black bg-auto bg-cover bg-center text-white py-20 text-center bg-contain">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Välkommen till Skånes Bilproffs</h1>
          <p className="text-xl md:text-2xl mb-6">Din pålitliga partner för alla dina bilreparationsbehov sen 1995</p>
        </section>

        {/* Simplified Slideshow Section */}
        <section className="relative w-full h-56 md:h-72 bg-gray-900 text-white flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-center p-2 md:p-4 w-full">
                  <h5 className="text-lg md:text-xl">{slide.title}</h5>
                  <p className="text-sm md:text-base">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 z-10 h-full px-2 md:px-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 z-10 h-full px-2 md:px-4 text-white bg-black bg-opacity-50 hover:bg-opacity-75"
          >
            &#10095;
          </button>
        </section>

        {/* Services Section */}
        <section className="services py-12 md:py-20 bg-cover bg-center text-center text-gray-900">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Våra tjänster</h2>
          <div className="service-list flex flex-wrap justify-center gap-8">
            <div className="service-item bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Oljebyte</h3>
              <p>Håll din motor igång smidigt med våra oljebytetjänster.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Bromsreparation</h3>
              <p>Säkra din säkerhet med våra experttjänster för bromsreparation.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Däckbyte</h3>
              <p>Få de bästa erbjudandena på däckbyte och hjulinställning.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Batteribyte</h3>
              <p>Byt ditt bilbatteri snabbt och enkelt med våra tjänster.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
              <h3 className="text-xl md:text-2xl font-bold mb-2">AC Service</h3>
              <p>Håll din bils luftkonditionering i toppskick med vår service.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Motorreparation</h3>
              <p>Vi erbjuder omfattande motorreparationstjänster för alla bilmodeller.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-4 md:p-6 rounded-lg shadow-lg w-72 md:w-80">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Fönsterreparation</h3>
              <p>Få de bästa erbjudandena på att reparera eller byta ut din fönstermekanism.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="testimonials py-12 md:py-20 bg-[url('/assets/challenger.jpg')] bg-cover bg-center text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12">Kontakta Oss</h2>
          <form className="max-w-md mx-auto bg-white bg-opacity-90 p-4 md:p-8 rounded-lg shadow-lg text-black">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2">Namn:</label>
              <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded text-black" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">E-post:</label>
              <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded text-black" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2">Meddelande:</label>
              <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Skicka Meddelande
            </button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-lg font-bold">Skånes Bilproffs</p>
          <p className="mt-2">Fårbackavägen 88, 212 91, Oxie, Sverige</p>
          <p className="mt-1">Telefon: +46 760641206</p>
          <p className="mt-1">E-post: sallahitamer@gmail.com</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} Skånes Bilproffs. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}
