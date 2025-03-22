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

      {/* Article */}
      <div className="max-w-6xl mx-auto p-6">

        <p className="text-gray-600 leading-relaxed mb-4">
          Digital marketing is constantly evolving, shaped by new technologies, consumer behavior, and industry innovations. As we move into the future, businesses must adapt to emerging trends to stay competitive. Here’s a look at the key developments that will define the future of digital marketing.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Artificial Intelligence and Automation
        </h2>
        <p className="text-gray-600 leading-relaxed">
          AI-powered tools are revolutionizing digital marketing by enabling personalized experiences, predictive analytics, and automation. Chatbots, AI-generated content, and smart recommendations will enhance customer interactions, reducing human intervention while improving efficiency.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Voice Search and Conversational Marketing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          With the rise of voice assistants like Alexa, Siri, and Google Assistant, optimizing content for voice search is becoming crucial. Conversational marketing, driven by AI chatbots and voice-activated devices, will make interactions more natural and user-friendly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Video and Interactive Content
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Video content continues to dominate digital marketing, with short-form videos, live streaming, and interactive elements engaging audiences more effectively. Augmented Reality (AR) and Virtual Reality (VR) will create immersive brand experiences, offering new ways to connect with consumers.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Hyper-Personalization and Data-Driven Marketing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Consumers expect highly tailored experiences based on their behavior, preferences, and browsing history. Data-driven marketing, powered by AI and machine learning, will help brands deliver more precise messaging, improving engagement and conversions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Blockchain and Privacy-First Marketing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          With increasing concerns over data privacy, blockchain technology will enhance transparency in digital advertising, reducing fraud and ensuring authentic user data protection. Marketers will need to balance personalization with compliance, following strict data regulations like GDPR and CCPA.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Influencer and Community-Driven Marketing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The power of influencers continues to grow, but the focus is shifting towards micro and nano influencers who offer higher engagement rates. Community-driven marketing will emphasize building brand advocacy through loyal customers and user-generated content.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          The Evolution of SEO and Search Algorithms
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Search engines are becoming more sophisticated, prioritizing user intent, experience, and E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness). Future SEO strategies will focus on semantic search, zero-click searches, and AI-driven ranking factors.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Sustainability and Ethical Marketing
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Consumers are increasingly favoring brands that align with their values, such as sustainability and ethical practices. Green marketing, social responsibility campaigns, and purpose-driven storytelling will become key components of successful digital marketing strategies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-2">
          Conclusion
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The future of digital marketing is dynamic, with technology driving innovation across multiple channels. Brands that leverage AI, data analytics, interactive content, and privacy-first marketing will thrive in this evolving landscape. Staying ahead of these trends will be crucial for businesses looking to connect meaningfully with their audiences and drive long-term success.
        </p>
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
