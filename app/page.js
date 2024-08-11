import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skånes bilproffs</title>
        <meta name="description" content="Professionella bilmekanikertjänster" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        {/* Hero Section */}
        <section className="hero bg-black bg-auto bg-cover bg-center text-white py-20 text-center bg-contain ">
          <h1 className="text-4xl font-bold mb-4">Välkommen till Skånes Bilproffs</h1>
          <p className="text-xl mb-6">Din pålitliga partner för alla dina bilreparationsbehov</p>
          
        </section>
        <section className="testimonials bg-center text-center text-white" style={{ width: 'auto', height: '400px' }}>
  <div className="flex justify-between items-center h-full">
    <img src="/assets/home.jpg" alt="Bild 1" className="w-1/4 h-full object-cover" />
    <img src="/assets/car1.jpg" alt="Bild 2" className="w-1/4 h-full object-cover" />
    <img src="/assets/car2.jpg" alt="Bild 3" className="w-1/4 h-full object-cover" />
    <img src="/assets/car3.jpg" alt="Bild 4" className="w-1/4 h-full object-cover" />
  </div>
</section>


        {/* Services Section */}
        <section className="services py-20  bg-cover bg-center text-center text-gray-900">
          <h2 className="text-3xl font-bold mb-12">Våra Tjänster</h2>
          <div className="service-list flex flex-wrap justify-center gap-8">
            <div className="service-item bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Oljebyte</h3>
              <p>Håll din motor igång smidigt med våra oljebytetjänster.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Oljebyte</h3>
              <p>Håll din motor igång smidigt med våra oljebytetjänster.</p>
            </div><div className="service-item bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Oljebyte</h3>
              <p>Håll din motor igång smidigt med våra oljebytetjänster.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Bromsreparation</h3>
              <p>Säkra din säkerhet med våra experttjänster för bromsreparation.</p>
            </div>
            <div className="service-item bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Däckbyte</h3>
              <p>Få de bästa erbjudandena på däckbyte och hjulinställning.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section
        <section className="testimonials py-20 bg-[url('/assets/challenger.jpg')] bg-cover bg-center text-center text-white">
          <h2 className="text-3xl font-bold mb-12">Vad Våra Kunder Säger</h2>
          <div className="testimonial-list flex flex-wrap justify-center gap-8">
            <div className="testimonial-item bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-lg w-80">
              <p className="italic">"Fantastisk service! Rekommenderar starkt."</p>
              <h4 className="mt-4 font-bold">John Doe</h4>
            </div>
            <div className="testimonial-item bg-gray-900 bg-opacity-75 p-6 rounded-lg shadow-lg w-80">
              <p className="italic">"Snabbt och pålitligt. Kommer definitivt tillbaka."</p>
              <h4 className="mt-4 font-bold">Jane Smith</h4>
            </div>
          </div>
        </section> */}

        {/* Contact Section */}
        <section className="testimonials py-20 bg-[url('/assets/challenger.jpg')] bg-cover bg-center text-center text-white">
          <h2 className="text-3xl font-bold mb-12 text-white text-white">Kontakta Oss</h2>
          <form className="max-w-md mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-black">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2">Namn:</label>
              <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded text-black" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">E-post:</label>
              <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded text-black" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2 ">Meddelande:</label>
              <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
              Skicka Meddelande
            </button>
          </form>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <p className="text-lg font-bold">Skånes Bilproffs</p>
          <p className="mt-2">Bilvägen 1234, Malmö, Sverige</p>
          <p className="mt-1">Telefon: +46 123 456 789</p>
          <p className="mt-1">E-post: info@skanesbilproffs.se</p>
          <p className="mt-4">&copy; {new Date().getFullYear()} Skånes Bilproffs. Alla rättigheter förbehållna.</p>
        </div>
      </footer>
    </div>
  );
}
