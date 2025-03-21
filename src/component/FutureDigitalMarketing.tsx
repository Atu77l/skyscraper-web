import { FaChartLine, FaRobot, FaMicrophone, FaVideo, FaShieldAlt, FaUserFriends } from "react-icons/fa";

export default function FutureDigitalMarketing() {
  return (
    <section className="py-20 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-blue-800">The Future of Digital Marketing</h2>
        <p className="text-lg text-gray-700 mt-4">
          Discover the key trends shaping the digital marketing landscape in the coming years.
        </p>

        {/* Key Trends */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
            >
              <div className="text-blue-600 text-5xl mb-4">{trend.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900">{trend.title}</h4>
              <p className="text-gray-600 mt-2">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const trends = [
  {
    title: "AI & Automation",
    description: "AI-driven marketing is revolutionizing customer engagement and personalization.",
    icon: <FaRobot />,
  },
  {
    title: "Voice Search Optimization",
    description: "Optimizing content for voice search is crucial as smart assistants grow.",
    icon: <FaMicrophone />,
  },
  {
    title: "Video Content Domination",
    description: "Short-form videos and live streaming are the future of brand engagement.",
    icon: <FaVideo />,
  },
  {
    title: "Data Privacy & Security",
    description: "Transparency and compliance with privacy laws are more important than ever.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Influencer & Social Marketing",
    description: "Micro-influencers and community-driven content are shaping trust and loyalty.",
    icon: <FaUserFriends />,
  },
  {
    title: "Omnichannel Experiences",
    description: "Seamless marketing across multiple platforms enhances customer journeys.",
    icon: <FaChartLine />,
  },
];
