import { FaStar, FaStarHalfAlt, FaQuoteLeft, FaUserCircle } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    feedback:
      "Exceptional service! Their solutions helped us scale our business effortlessly.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director, GrowthX",
    feedback:
      "Their AI-driven insights gave us a competitive advantage. Highly recommend!",
    rating: 4.5,
  },
  {
    name: "Michael Lee",
    role: "Founder, Startup Hub",
    feedback:
      "Their tech solutions revolutionized our operations. Outstanding work!",
    rating: 5,
  },
];

export default function ReviewSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-800">What Our Clients Say</h2>
        <p className="text-lg text-gray-700 mt-4">
          Hear from businesses that have transformed with our solutions.
        </p>

        {/* Reviews */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-blue-600 text-4xl mb-4" />

              {/* Review Content */}
              <p className="text-gray-800 text-lg italic">{review.feedback}</p>

              {/* User Info (React Icon for User Avatar) */}
              <div className="mt-6 flex items-center">
                <FaUserCircle className="text-blue-600 text-5xl" />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-gray-600">{review.role}</p>
                </div>
              </div>

              {/* Star Ratings */}
              <div className="mt-4 flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  i + 1 <= review.rating ? (
                    <FaStar key={i} />
                  ) : (
                    i < review.rating ? <FaStarHalfAlt key={i} /> : <FaStar key={i} className="opacity-30" />
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
