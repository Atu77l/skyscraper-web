import { FaSearch, FaMobileAlt, FaPenFancy, FaLink, FaChartLine } from "react-icons/fa";

const seoStrategies = [
  {
    title: "AI-Driven SEO",
    description: "Leverage AI tools to analyze trends and optimize content automatically.",
    icon: <FaSearch />,
    color: "bg-blue-500",
  },
  {
    title: "Mobile-First Indexing",
    description: "Ensure websites are mobile-friendly to rank higher on Google.",
    icon: <FaMobileAlt />,
    color: "bg-green-500",
  },
  {
    title: "High-Quality Content",
    description: "Focus on informative, engaging, and valuable content creation.",
    icon: <FaPenFancy />,
    color: "bg-yellow-500",
  },
  {
    title: "Backlink Building",
    description: "Gain authoritative backlinks to improve domain authority.",
    icon: <FaLink />,
    color: "bg-red-500",
  },
  {
    title: "User Experience & Core Web Vitals",
    description: "Improve page speed, responsiveness, and interactivity for better rankings.",
    icon: <FaChartLine />,
    color: "bg-purple-500",
  },
];

export default function SEOStrategies() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Top 5 SEO Strategies of 2025</h2>
        <p className="text-lg text-gray-600">
          Stay ahead in digital marketing by implementing the latest SEO techniques. 
          These strategies will help improve your website&rsquo;s visibility and rankings.
        </p>
      </div>

      {/* SEO Strategies Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
        {seoStrategies.map((strategy, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg text-white shadow-md hover:shadow-xl transform transition-all hover:scale-105 ${strategy.color}`}
          >
            <div className="text-4xl mb-4">{strategy.icon}</div>
            <h3 className="text-2xl font-semibold">{strategy.title}</h3>
            <p className="mt-2 text-lg">{strategy.description}</p>
          </div>
        ))}
      </div>

      {/* Detailed Explanation Section */}
      <div className=" p-8 mt-16 max-w-6xl mx-auto">
        <p className="text-gray-600 leading-relaxed mb-6">
          SEO is constantly evolving, and staying ahead of the latest trends is crucial for digital success. 
          Whether you&rsquo;re a business owner, marketer, or content creator, implementing these five SEO strategies 
          can help improve your website&rsquo;s ranking and visibility.
        </p>

        {/* Strategy Details */}
        {[
          {
            title: "1. Focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)",
            description:
              "Google prioritizes high-quality content that demonstrates experience, expertise, authoritativeness, and trustworthiness (E-E-A-T). Ensure your content is well-researched, written by credible sources, and backed by authoritative references.",
          },
          {
            title: "2. Optimize for Core Web Vitals",
            description:
              "Google considers user experience a critical ranking factor. Optimize your site&rsquo;s loading speed, interactivity, and visual stability to enhance Core Web Vitals. Compress images, use a CDN, and minimize unnecessary scripts for faster performance.",
          },
          {
            title: "3. Leverage AI and Semantic Search",
            description:
              "Google&rsquo;s AI-driven algorithms now focus on semantic search rather than just keywords. Use natural language, answer search intent, and structure your content with FAQs, headings, and structured data (Schema Markup) to improve discoverability.",
          },
          {
            title: "4. Build High-Quality Backlinks",
            description:
              "Backlinks remain a powerful ranking factor. Focus on earning links from authoritative websites through guest blogging, digital PR, and collaborations. Avoid spammy link-building tactics to prevent Google penalties.",
          },
          {
            title: "5. Optimize for Voice Search and Mobile SEO",
            description:
              "With the rise of voice assistants, optimizing for voice search is essential. Use conversational keywords and long-tail phrases that match natural speech patterns. Also, ensure your site is mobile-friendly with responsive design and fast load times.",
          },
        ].map((item, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed mt-2">{item.description}</p>
          </div>
        ))}

        {/* Conclusion Section */}
        <h3 className="text-2xl font-semibold text-gray-800 mt-8">Conclusion</h3>
        <p className="text-gray-600 leading-relaxed mt-2">
          SEO is a continuous process that requires adapting to algorithm changes and user behaviors. 
          By focusing on E-E-A-T, Core Web Vitals, AI-driven content, backlinks, and voice search, 
          you can enhance your search rankings and drive more organic traffic in 2025.
        </p>
      </div>
    </div>
  );
}
