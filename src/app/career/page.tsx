import { FaBriefcase, FaFileAlt, FaUser, FaEnvelope } from "react-icons/fa";
import Navbar from "@/component/Navbar";

export default function Career() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-white p-8 text-center border-b">
        <h1 className="text-4xl font-bold">Join Our Team</h1>
        <p className="text-lg text-gray-600 mt-2">
          Build your future with Sky Scraper Skill
        </p>
      </header>

      {/* Career Introduction */}
      <section className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold">Grow Your Career With Us</h2>
        <p className="text-lg text-gray-600 mt-4">
          At Sky Scraper Skill, we believe in nurturing talent and providing
          opportunities to innovate and grow. If you're passionate about digital
          marketing and software development, we would love to have you on
          board.
        </p>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-white px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center">Current Openings</h3>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg border flex items-start">
            <FaBriefcase className="text-blue-600 text-2xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold">Software Developer</h4>
              <p className="text-gray-600 mt-2">
                We are looking for an experienced developer skilled in modern
                web technologies.
              </p>
              <button className="mt-4 text-blue-600 font-semibold hover:underline">
                Apply Now
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg border flex items-start">
            <FaBriefcase className="text-blue-600 text-2xl mr-4" />
            <div>
              <h4 className="text-xl font-semibold">Digital Marketing Specialist</h4>
              <p className="text-gray-600 mt-2">
                Join our team to help businesses enhance their online presence.
              </p>
              <button className="mt-4 text-blue-600 font-semibold hover:underline">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-center">Apply Now</h3>
        <form className="mt-8 bg-white p-6 rounded-lg border">
          <div className="mb-4 flex items-center border p-3 rounded-md">
            <FaUser className="text-gray-500 text-lg mr-3" />
            <input
              type="text"
              className="w-full outline-none text-lg"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-4 flex items-center border p-3 rounded-md">
            <FaEnvelope className="text-gray-500 text-lg mr-3" />
            <input
              type="email"
              className="w-full outline-none text-lg"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-4 flex items-center border p-3 rounded-md">
            <FaFileAlt className="text-gray-500 text-lg mr-3" />
            <input type="file" className="w-full text-gray-500" />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg w-full hover:bg-blue-700 transition">
            Submit Application
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Sky Scraper Skill. All rights reserved.</p>
      </footer>
    </div>
  );
}
