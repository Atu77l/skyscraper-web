import Image from "next/image";
import { FaCode, FaBullhorn, FaChartLine, FaCogs, FaUsers, FaHandshake, FaLightbulb, FaAward, FaCheckCircle } from "react-icons/fa";
import Navbar from "@/component/Navbar";
import heroImage from './../assets/images/hero-image.jpg'
import ReviewSection from "@/component/ReviewSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="text-center py-20 px-4 relative bg-gray-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Transform Your Business with Digital Solutions
            </h2>
            <p className="text-lg mt-4 text-gray-700">
              Unlock new possibilities with AI-powered marketing, cutting-edge software
              development, and strategic business growth.
            </p>

            {/* Key Features */}
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-800">
                <FaCheckCircle className="text-blue-600 mr-3" />
                AI-driven marketing strategies
              </li>
              <li className="flex items-center text-gray-800">
                <FaCheckCircle className="text-blue-600 mr-3" />
                Scalable software development
              </li>
              <li className="flex items-center text-gray-800">
                <FaCheckCircle className="text-blue-600 mr-3" />
                Data-driven business growth solutions
              </li>
            </ul>

            {/* CTA Button */}
            <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg text-lg font-semibold transition-transform duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <Image
              src={heroImage}
              alt="Business Growth"
              width={600}
              height={400}
              className="rounded-lg shadow-lg mx-auto md:ml-auto"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white px-6">
        <h3 className="text-4xl font-bold text-center text-gray-900">What We Offer</h3>
        <p className="text-lg text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Our expertise spans across multiple digital domains to help businesses thrive in a fast-paced world.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FaCode,
              title: "Web Development",
              desc: "We build stunning, high-performance websites tailored to your business goals.",
              color: "bg-blue-500",
            },
            {
              icon: FaBullhorn,
              title: "Digital Marketing",
              desc: "From SEO to paid ads, we craft marketing strategies that maximize your reach.",
              color: "bg-green-500",
            },
            {
              icon: FaChartLine,
              title: "SEO Optimization",
              desc: "Our SEO experts help you rank higher on search engines and drive organic traffic.",
              color: "bg-yellow-500",
            },
            {
              icon: FaCogs,
              title: "Software Solutions",
              desc: "We develop customized software to streamline your operations and boost efficiency.",
              color: "bg-purple-500",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white shadow-md rounded-lg p-8 transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute top-0 left-0 w-12 h-1 ${service.color}`}></div>
              <service.icon className={`${service.color} text-white p-3 rounded-full text-5xl mx-auto`} />
              <h4 className="text-2xl font-semibold mt-5 text-gray-900">{service.title}</h4>
              <p className="text-gray-600 mt-3">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 px-6 text-center bg-gradient-to-b from-blue-50 to-white">
        <h3 className="text-4xl font-bold text-gray-900">Why Choose <span className="text-blue-600">Sky Scraper Skill?</span></h3>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Unlock growth opportunities with our expert-driven, client-centric approach.
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: FaUsers,
              title: "Expert Team",
              desc: "Our professionals bring years of industry experience and innovation.",
              color: "bg-blue-500",
            },
            {
              icon: FaHandshake,
              title: "Client-Centric Approach",
              desc: "We focus on your goals to deliver customized, impactful solutions.",
              color: "bg-green-500",
            },
            {
              icon: FaLightbulb,
              title: "Innovative Solutions",
              desc: "We stay ahead of industry trends to provide cutting-edge strategies.",
              color: "bg-yellow-500",
            },
            {
              icon: FaAward,
              title: "Proven Results",
              desc: "Our track record speaks for itself, with satisfied clients worldwide.",
              color: "bg-purple-500",
            },
          ].map((reason, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white shadow-md rounded-lg p-8 transition-all duration-300 hover:scale-105"
            >
              <div className={`absolute top-0 left-0 w-12 h-1 ${reason.color}`}></div>
              <div className={`mx-auto w-16 h-16 flex items-center justify-center rounded-full ${reason.color} text-white`}>
                <reason.icon className="text-3xl" />
              </div>
              <h4 className="text-2xl font-semibold mt-5 text-gray-900">{reason.title}</h4>
              <p className="text-gray-600 mt-3">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ReviewSection />


      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <h3 className="text-3xl font-bold">Let's Build Something Amazing Together</h3>
        <p className="text-lg mt-4">Get in touch to start your digital transformation journey.</p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md text-lg transition-transform duration-300 hover:scale-105">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Sky Scraper Skill. All rights reserved.</p>
      </footer>
    </div>
  );
}
