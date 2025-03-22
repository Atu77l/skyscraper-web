import Navbar from "@/component/Navbar";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-white text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-10 px-6 text-center shadow-lg rounded-b-xl">
        <h1 className="text-5xl font-extrabold tracking-wide">Get in Touch</h1>
        <p className="text-xl mt-2 font-light">We&rsquo;re here to help and answer any questions</p>
      </header>


      {/* Contact Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg border mt-5">
        <h2 className="text-3xl font-semibold text-center text-blue-600">Get In Touch</h2>
        <p className="text-lg text-gray-600 mt-4 text-center">
          Have questions or need assistance? Fill out the form below, and we&rsquo;ll get back to you as soon as possible.
        </p>
        <form className="mt-8 grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="bg-blue-600 text-white p-3 rounded-lg text-lg hover:bg-blue-700 transition duration-300">
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Details */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold text-blue-600">Our Contact Information</h3>
        <p className="text-lg text-gray-600 mt-4">Feel free to reach out to us through any of the following channels:</p>
        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center">
            <FaEnvelope className="text-blue-600 text-4xl mb-2" />
            <h4 className="text-xl font-semibold">Email</h4>
            <p className="text-gray-600 mt-2">contact@skyscraperskill.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center">
            <FaPhoneAlt className="text-blue-600 text-4xl mb-2" />
            <h4 className="text-xl font-semibold">Phone</h4>
            <p className="text-gray-600 mt-2">+1 (234) 567-890</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center">
            <FaMapMarkerAlt className="text-blue-600 text-4xl mb-2" />
            <h4 className="text-xl font-semibold">Address</h4>
            <p className="text-gray-600 mt-2">1234 Digital Way, Tech City, USA</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Sky Scraper Skill. All rights reserved.</p>
      </footer>
    </div>
  );
}
