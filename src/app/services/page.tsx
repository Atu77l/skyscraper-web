import Navbar from "@/component/Navbar";
import { FaSearch, FaCode, FaBullhorn, FaPenNib, FaMobileAlt, FaChartLine } from "react-icons/fa";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Services Section */}
      <section className="py-16 text-center px-6">
        <h2 className="text-4xl font-bold text-blue-700">Our Services</h2>
        <p className="text-lg mt-4 text-gray-600">
          We provide a range of high-quality digital solutions to help businesses grow and thrive in the online world.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {/* SEO Optimization */}
          <div className="bg-white p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105">
            <FaSearch className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">SEO Optimization</h3>
            <p className="text-gray-600 mt-2">
              Enhance your website&rsquo;s visibility and attract more organic traffic with data-driven SEO strategies, keyword optimization, and content improvements.
            </p>
          </div>

          {/* Web Development */}
          <div className="bg-white p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105">
            <FaCode className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-600 mt-2">
              Build stunning, fast, and responsive websites that provide seamless user experiences across all devices, from simple landing pages to complex applications.
            </p>
          </div>

          {/* Social Media Marketing */}
          <div className="bg-white p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105">
            <FaBullhorn className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Social Media Marketing</h3>
            <p className="text-gray-600 mt-2">
              Strengthen your brand presence across social media platforms through compelling content, targeted ads, and strategic engagement.
            </p>
          </div>

          {/* Content Marketing */}
          <div className="bg-white p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105">
            <FaPenNib className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Content Marketing</h3>
            <p className="text-gray-600 mt-2">
              Deliver high-quality, valuable content through blogs, videos, and articles to establish your brand as a thought leader in your industry.
            </p>
          </div>

          {/* Mobile App Development */}
          <div className="bg-white p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105">
            <FaMobileAlt className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Mobile App Development</h3>
            <p className="text-gray-600 mt-2">
              Design and develop feature-rich, scalable mobile applications for iOS and Android to expand your digital reach and engage customers effectively.
            </p>
          </div>

          {/* PPC Advertising */}
          <div className="bg-white p-6 rounded-lg flex flex-col items-center transition-transform hover:scale-105">
            <FaChartLine className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold">Pay-Per-Click Advertising</h3>
            <p className="text-gray-600 mt-2">
              Maximize ROI with precision-targeted PPC campaigns on Google Ads and social media, driving high-quality leads and conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white text-center px-6">
        <h3 className="text-3xl font-bold text-blue-700">Why Choose NexusWave?</h3>
        <p className="text-lg mt-4 text-gray-600">
          We don&rsquo;t just provide services; we create **strategies that drive real results** for businesses of all sizes.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg text-left">
            <h4 className="text-xl font-semibold">🔹 Experienced Team</h4>
            <p className="text-gray-600 mt-2">
              Our skilled professionals bring years of experience in **digital marketing, web development, and app solutions.**
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg text-left">
            <h4 className="text-xl font-semibold">📊 Data-Driven Strategies</h4>
            <p className="text-gray-600 mt-2">
              We use cutting-edge analytics to **optimize your campaigns and website performance** for maximum impact.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg text-left">
            <h4 className="text-xl font-semibold">🎯 Customized Solutions</h4>
            <p className="text-gray-600 mt-2">
              Every business is unique! We tailor our **services to meet your specific goals and challenges.**
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg text-left">
            <h4 className="text-xl font-semibold">⏳ 24/7 Support</h4>
            <p className="text-gray-600 mt-2">
              Our team is **always available** to assist you, ensuring seamless service and customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center px-6">
        <h3 className="text-3xl font-bold">🚀 Let&rsquo;s Grow Your Business Together</h3>
        <p className="text-lg mt-4">
          Take the first step toward digital success with **SkyScraperSkill&rsquo;s expert solutions.**
        </p>
        <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold transition-transform hover:scale-105">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 NexusWave. All rights reserved.</p>
      </footer>
    </div>
  );
}
