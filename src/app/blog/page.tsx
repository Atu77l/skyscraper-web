"use client"
import { useState } from "react";
import Navbar from "@/component/Navbar";
import { FaRegClock, FaUserAlt } from "react-icons/fa";
import FutureDigitalMarketing from "@/component/FutureDigitalMarketing";
import SEOStrategies from "@/component/SeoStrategies";
import AITransformation from "@/component/AiSoftwareDevelopment";
import CyberSecurityTrends from "@/component/CyberSecurityTrends";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Digital Marketing",
    date: "March 18, 2025",
    content:
      "Digital marketing is evolving rapidly with AI-driven personalization, voice search optimization, and automation. Discover how these trends will shape the industry in 2025. Expect more immersive experiences, predictive analytics, and enhanced customer engagement strategies...",
  },
  {
    id: 2,
    title: "How AI is Transforming Software Development",
    date: "March 12, 2025",
    content:
      "AI-powered tools are revolutionizing coding, debugging, and testing. Learn how AI is reshaping software development and what it means for developers and businesses. AI-driven code generation, smart debugging, and predictive maintenance will define the next-gen software industry...",
  },
  {
    id: 3,
    title: "Top 5 SEO Strategies for 2025",
    date: "March 5, 2025",
    content:
      "Boost your website rankings with advanced SEO tactics such as semantic search, content optimization, and AI-driven keyword strategies. Stay ahead in the competitive digital landscape with structured data, voice search optimization, and mobile-first indexing...",
  },
  {
    id: 4,
    title: "Cybersecurity Trends You Need to Know",
    date: "February 28, 2025",
    content:
      "Cyber threats are constantly evolving, and businesses must stay ahead of hackers. Learn about the latest trends in cybersecurity, including AI-driven threat detection, zero-trust security models, and advanced data encryption techniques...",
  },
  {
    id: 5,
    title: "The Rise of Web3 and Decentralized Internet",
    date: "February 20, 2025",
    content:
      "Web3 is revolutionizing the internet with decentralization, blockchain technology, and digital ownership. Discover how Web3 applications are shaping the future of finance, social media, and online identity...",
  },
  {
    id: 6,
    title: "How to Build Scalable Web Applications",
    date: "February 10, 2025",
    content:
      "Scalability is crucial for modern web applications. Learn best practices in architecture design, cloud solutions, and microservices to build high-performing, scalable applications that handle millions of users...",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <header className="bg-white p-6 text-center border-b shadow-md">
        <h1 className="text-4xl font-bold text-blue-700">Our Blog</h1>
        <p className="text-lg text-gray-600 mt-2">
          Stay updated with the latest insights and trends
        </p>
      </header>

      <main className="py-16 px-6 max-w-6xl mx-auto">
        {selectedPost ? (
          // Full Article View
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <button
              onClick={() => setSelectedPost(null)}
              className="text-blue-600 hover:underline mb-4 block"
            >
              ← Back to Articles
            </button>
            <h2 className="text-3xl font-bold text-blue-700">{selectedPost.title}</h2>
            <div className="flex items-center text-gray-500 text-sm mt-2">
              <FaUserAlt className="mr-2" /> Admin | <FaRegClock className="mx-2" />
              {selectedPost.date}
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed">{selectedPost.id==1 && <FutureDigitalMarketing/>}
            {selectedPost.id==3&&<SEOStrategies/>}{selectedPost.id==2&&<AITransformation/>}
            {selectedPost.id==4&&<CyberSecurityTrends/>}{selectedPost.id==5&&<CyberSecurityTrends/>}{selectedPost.id==6&&<CyberSecurityTrends/>}</p>
          </div>
        ) : (
          // Blog Post List
          <>
            <h2 className="text-3xl font-semibold text-center text-blue-700">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-center">
              Explore industry trends, expert tips, and news from Sky Scraper Skill.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-6 rounded-lg shadow-md border hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <h3 className="text-xl font-semibold text-blue-700">{post.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <FaUserAlt className="mr-2" /> Admin | <FaRegClock className="mx-2" />
                    {post.date}
                  </div>
                  <p className="text-gray-600 mt-3">
                    {post.content.slice(0, 100)}...{" "}
                    <span className="text-blue-600 hover:underline">Read More</span>
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>

      

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-12">
        <p>&copy; 2025 Sky Scraper Skill. All rights reserved.</p>
      </footer>
    </div>
  );
}
