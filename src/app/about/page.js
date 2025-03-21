import Image from "next/image";
import Navbar from "../../component/Navbar";
import { FaLightbulb, FaUsers, FaStar, FaRocket, FaHandshake, FaAward, FaPhone } from "react-icons/fa";
import aboutBanner from './../../assets/images/about.jpg';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative w-full h-[450px]">
        <Image
          src={aboutBanner}
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Who we are and what we do</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900">
          Empowering Businesses with <span className="text-blue-600">Technology</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          At <span className="text-blue-600 font-semibold">Sky Scraper Skill</span>, we specialize in delivering top-notch 
          <span className="font-semibold"> digital marketing</span> and <span className="font-semibold">software development</span> solutions. 
          Our mission is to help businesses thrive in the digital era through innovative strategies and cutting-edge technology.
        </p>
      </section>

      {/* Our Core Values */}
      <section className="py-16 bg-white px-6">
        <h3 className="text-4xl font-bold text-center">Our Core Values</h3>
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          {[
            { icon: FaLightbulb, title: "Innovation", desc: "We embrace creativity to drive business growth.", color: "bg-blue-500" },
            { icon: FaUsers, title: "Integrity", desc: "We value honesty and transparency in everything we do.", color: "bg-green-500" },
            { icon: FaStar, title: "Excellence", desc: "We strive for quality and continuous improvement.", color: "bg-yellow-500" }
          ].map((value, index) => (
            <div key={index} className="p-6 rounded-lg bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full ${value.color} text-white`}>
                <value.icon className="text-3xl" />
              </div>
              <h4 className="text-2xl font-semibold mt-5 text-gray-900">{value.title}</h4>
              <p className="text-gray-600 mt-3">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h3 className="text-4xl font-bold">Why Choose <span className="text-blue-600">Sky Scraper Skill?</span></h3>
        <p className="text-lg text-gray-700 mt-4">
          Our team of experts ensures your business stands out with tailored digital strategies and robust software solutions.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            { icon: FaRocket, title: "Expert Team", desc: "Our professionals bring years of industry experience.", color: "bg-red-500" },
            { icon: FaHandshake, title: "Client-Centric Approach", desc: "We prioritize your goals and success.", color: "bg-green-500" },
            { icon: FaAward, title: "Proven Results", desc: "Our strategies drive real business growth and success.", color: "bg-purple-500" }
          ].map((reason, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg transition-all duration-300 hover:scale-105">
              <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full ${reason.color} text-white`}>
                <reason.icon className="text-3xl" />
              </div>
              <h4 className="text-2xl font-semibold mt-5 text-gray-900">{reason.title}</h4>
              <p className="text-gray-600 mt-3">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <h3 className="text-4xl font-bold">Let's Build Something Amazing Together</h3>
        <p className="text-lg mt-4">Get in touch with us today to start your digital transformation journey.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition-all">
          <FaPhone className="inline-block mr-2" /> Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Sky Scraper Skill. All rights reserved.</p>
      </footer>
    </div>
  );
}
