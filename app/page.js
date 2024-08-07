import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Skånes bilproffs</title>
        <meta name="description" content="Professional car mechanic services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans">
        {/* Hero Section */}
        <section className="hero bg-gray-800 text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Car Mechanic Services</h1>
          <p className="text-xl mb-6">Your trusted partner for all your car repair needs</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button>
        </section>

        {/* Services Section */}
        <section className="services py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Services</h2>
          <div className="service-list flex flex-wrap justify-center gap-8">
            <div className="service-item bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Oil Change</h3>
              <p>Keep your engine running smoothly with our oil change services.</p>
            </div>
            <div className="service-item bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Brake Repair</h3>
              <p>Ensure your safety with our expert brake repair services.</p>
            </div>
            <div className="service-item bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-2xl font-bold mb-2">Tire Replacement</h3>
              <p>Get the best deals on tire replacement and alignment.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials py-20 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="testimonial-list flex flex-wrap justify-center gap-8">
            <div className="testimonial-item bg-white p-6 rounded-lg shadow-lg w-80">
              <p className="italic">"Great service! Highly recommend."</p>
              <h4 className="mt-4 font-bold">John Doe</h4>
            </div>
            <div className="testimonial-item bg-white p-6 rounded-lg shadow-lg w-80">
              <p className="italic">"Fast and reliable. Will definitely come back."</p>
              <h4 className="mt-4 font-bold">Jane Smith</h4>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact py-20 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
          <form className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-left mb-2">Name:</label>
              <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-2">Email:</label>
              <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-left mb-2">Message:</label>
              <textarea id="message" name="message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
