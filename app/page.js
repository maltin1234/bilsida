"use client";

import Head from 'next/head';
import  Contact from "./components/contact"

export default function Home() {
  const slides = [
    { src: "/assets/home.jpg", alt: "Place Image 1" },
    { src: "/assets/car3.jpg", alt: "Place Image 2" },
    { src: "/assets/car2.jpg", alt: "Place Image 3" },
    { src: "/assets/Bilmekaniker.png", alt: "Place Image 3" },
    
  ];

  return (
    <div>
      <Head>
        <title>Skånes Bilproffs</title>
        <meta name="description" content="Professionella bilmekanikertjänster" />
        <meta name="description" content="Professionella bilmekanikertjänster sedan 1995, din pålitliga partner för bilreparationer i Oxie." />
         <meta name="keywords" content="Bilreparation, Bilservice, Skånes Bilproffs, Bilmekaniker, Oxie, Bilverkstad" />
         <meta name="robots" content="index, follow" />
         <meta name="author" content="Skånes Bilproffs" />
         <meta property="og:title" content="Skånes Bilproffs - Bilreparation och Service" />
         <meta property="og:description" content="Erfarna bilmekaniker som erbjuder omfattande bilservice och reparationer." />
          <meta property="og:image" content="/assets/home.jpg" />
          <meta property="og:url" content="https://skanesbilproffs.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        {/* Full-Screen Hero Section with Boxed Text */}
        <section className="hero bg-[url('/assets/pexels-pixabay.jpg')] bg-cover bg-center text-white h-screen flex items-center justify-center">
          <div className="bg-black bg-opacity-75 p-8 rounded-lg max-w-xl text-center">
            <h1 className="text-5xl font-bold mb-4">Välkommen till Skånes Bilproffs</h1>
            <p className="text-xl mb-6">
              Vi har varit din pålitliga partner för bilreparationer sedan 1995. Vårt team erbjuder en rad tjänster för att hålla din bil i bästa skick.
            </p>
            <a href="#services" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full">Läs Mer</a>
          </div>
        </section>

       

        {/* Services Section */}
        <section id="services" className="services py-12 md:py-20 bg-gray-200 text-center text-gray-900">
          <h2 className="text-4xl font-bold mb-8 md:mb-12">Våra Tjänster</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { title: "Oljebyte", description: "Håll din motor igång smidigt med våra oljebytetjänster." },
              { title: "Bromsreparation", description: "Säkra din säkerhet med våra experttjänster för bromsreparation." },
              { title: "Däckbyte", description: "Få de bästa erbjudandena på däckbyte och hjulinställning." },
              { title: "Batteribyte", description: "Byt ditt bilbatteri snabbt och enkelt med våra tjänster." },
              { title: "AC Service", description: "Håll din bils luftkonditionering i toppskick med vår service." },
              { title: "Motorreparation", description: "Omfattande motorreparationstjänster för alla bilmodeller." },
              { title: "Fönsterreparation", description: "Reparation eller byte av din fönstermekanism." },
            ].map((service, index) => (
              <div key={index} className="service-item bg-white p-6 rounded-lg shadow-lg w-72 md:w-80">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>
         {/* Showcase Section for Place Images */}
         <section className="showcase py-12 md:py-20 bg-gray-100 text-center text-gray-900">
          <h2 className="text-4xl font-bold mb-8 md:mb-12">Upptäck Våra Lokaler</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {slides.map((slide, index) => (
              <div key={index} className="w-72 md:w-80 bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="contact py-12 md:py-20 bg-[url('/assets/challenger.jpg')] bg-cover bg-center text-center text-white">
        <Contact></Contact>
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
