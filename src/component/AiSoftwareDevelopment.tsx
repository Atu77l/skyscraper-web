import { FaCode, FaRobot, FaCogs, FaChartLine, FaLightbulb } from "react-icons/fa";

const aiTransformations = [
  {
    title: "Automated Code Generation",
    description:
      "AI-powered tools like GitHub Copilot and OpenAI Codex assist developers by suggesting code snippets, reducing development time.",
    icon: <FaCode />,
    color: "bg-blue-600",
  },
  {
    title: "AI-Driven Testing",
    description:
      "Machine learning models predict potential bugs and automate test case generation, improving software reliability.",
    icon: <FaRobot />,
    color: "bg-green-600",
  },
  {
    title: "Intelligent Debugging",
    description:
      "AI helps in detecting and fixing errors faster by analyzing logs and patterns, reducing debugging time.",
    icon: <FaCogs />,
    color: "bg-yellow-500",
  },
  {
    title: "Predictive Analytics in Development",
    description:
      "AI predicts project timelines, resource needs, and possible risks, optimizing software development cycles.",
    icon: <FaChartLine />,
    color: "bg-red-500",
  },
  {
    title: "Enhanced Decision-Making",
    description:
      "AI-driven insights guide architectural decisions, improving performance, scalability, and security.",
    icon: <FaLightbulb />,
    color: "bg-purple-600",
  },
];

export default function AITransformation() {
  return (
    <div className="max-w-6xl mx-auto p-8 rounded-lg">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-10">
        How AI is Transforming <span className="text-blue-600">Software Development</span>
      </h2>

      {/* Cards Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {aiTransformations.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl text-white shadow-lg transform transition-all hover:scale-105 ${item.color}`}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-lg opacity-90">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="mt-12">
        <p className="text-gray-700 leading-relaxed text-lg">
          Artificial Intelligence (AI) is revolutionizing numerous industries, and software development is no exception.
          By automating tasks, enhancing efficiency, and introducing innovative solutions, AI is reshaping the way developers build, test, and maintain software applications.
        </p>

        <div className="mt-6 space-y-6 text-gray-800">
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-600">1. Automated Code Generation</h3>
            <p className="mt-2 text-lg">
              AI-powered tools like GitHub Copilot and Tabnine assist developers by suggesting code snippets, completing lines of code, and even generating entire functions based on natural language descriptions.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-green-600">2. AI-Driven Testing and Debugging</h3>
            <p className="mt-2 text-lg">
              AI tools predict potential issues in code before they become critical problems, automating test case generation and debugging.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-yellow-600">3. Predictive Analytics in Development</h3>
            <p className="mt-2 text-lg">
              AI predicts project timelines, resource needs, and possible risks, optimizing software development cycles.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-red-600">4. AI-Powered Security Enhancements</h3>
            <p className="mt-2 text-lg">
              AI-driven security tools analyze code for vulnerabilities and predict cyber threats before they happen.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-purple-600">5. Intelligent DevOps and CI/CD Pipelines</h3>
            <p className="mt-2 text-lg">
              AI automates CI/CD pipelines, optimizes deployments, and predicts system failures before they occur.
            </p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-blue-700">6. AI-Powered Documentation & Code Reviews</h3>
            <p className="mt-2 text-lg">
              AI assists in generating documentation and reviewing code for best practices, improving collaboration and maintainability.
            </p>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="mt-10 bg-blue-50 p-6 rounded-lg shadow-md text-center">
        <h3 className="text-3xl font-bold text-blue-700">Conclusion</h3>
        <p className="mt-3 text-lg text-gray-700 leading-relaxed">
          AI is transforming software development by automating tedious tasks, improving code quality, enhancing security, and optimizing project management.
          While AI is not replacing human developers, it serves as an invaluable assistant, enabling teams to work faster, smarter, and more efficiently.
          As AI technology continues to evolve, its impact on software development will only grow, driving innovation and reshaping the future of the industry.
        </p>
      </div>
    </div>
  );
}
