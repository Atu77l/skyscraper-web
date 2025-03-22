import { FaShieldAlt, FaLock, FaBug, FaNetworkWired, FaUserSecret, FaEye } from "react-icons/fa";

const cybersecurityTrends = [
  {
    title: "Zero Trust Architecture (ZTA)",
    description:
      "A security model that requires strict identity verification for every person and device attempting to access resources, regardless of location.",
    icon: <FaShieldAlt />, 
    color: "bg-blue-600",
  },
  {
    title: "AI-Driven Cybersecurity",
    description:
      "Artificial Intelligence is enhancing threat detection, automating responses, and predicting cyber attacks before they occur.",
    icon: <FaLock />, 
    color: "bg-green-600",
  },
  {
    title: "Rise of Ransomware Attacks",
    description:
      "Ransomware is evolving, with attackers using sophisticated tactics to exploit vulnerabilities and demand payments.",
    icon: <FaBug />, 
    color: "bg-red-500",
  },
  {
    title: "Expansion of IoT Security",
    description:
      "With billions of connected devices, securing the Internet of Things (IoT) has become a priority to prevent network breaches.",
    icon: <FaNetworkWired />, 
    color: "bg-yellow-500",
  },
  {
    title: "Growing Insider Threats",
    description:
      "Organizations are facing increased risks from internal employees, requiring enhanced monitoring and security policies.",
    icon: <FaUserSecret />, 
    color: "bg-purple-600",
  },
  {
    title: "Privacy-First Regulations",
    description:
      "Governments worldwide are implementing stricter privacy laws like GDPR and CCPA, affecting how businesses handle data.",
    icon: <FaEye />, 
    color: "bg-gray-600",
  },
];

export default function CyberSecurityTrends() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-10">
        Cybersecurity Trends <span className="text-blue-600">You Need to Know</span>
      </h2>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cybersecurityTrends.map((trend, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl text-white shadow-lg transform transition-all hover:scale-105 ${trend.color}`}
          >
            <div className="text-5xl mb-4">{trend.icon}</div>
            <h3 className="text-2xl font-semibold">{trend.title}</h3>
            <p className="mt-2 text-lg opacity-90">{trend.description}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="mt-12">
        <p className="text-gray-700 leading-relaxed text-lg">
          Cybersecurity is evolving rapidly, with new threats emerging and security measures adapting to combat them.
          Staying updated on the latest trends is crucial for individuals and businesses to protect sensitive data and systems.
        </p>

        <div className="mt-6 space-y-6 text-gray-800">
          {cybersecurityTrends.map((trend, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className={`text-2xl font-semibold ${trend.color}`}>{trend.title}</h3>
              <p className="mt-2 text-lg">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-10 bg-blue-50 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-bold text-blue-700">Conclusion</h3>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          Cyber threats are becoming more sophisticated, making cybersecurity more critical than ever.
          By adopting the latest security strategies such as Zero Trust, AI-driven security, and strong privacy measures,
          organizations and individuals can enhance protection against evolving threats.
          Staying informed and proactive is key to safeguarding digital assets in today&rsquo;s fast-changing landscape.
        </p>
      </div>
    </div>
  );
}
