import Navbar from "@/component/Navbar";

export default function TermsAndConditions() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        <Navbar/>
        
        {/* Header */}
        <header className="bg-white shadow-md p-6 text-center">
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="text-lg text-gray-600 mt-2">Last updated: March 2025</p>
        </header>
  
        {/* Content Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold">Introduction</h2>
          <p className="text-lg text-gray-600 mt-4">
            Welcome to Sky Scraper Skill! By accessing our website and services, you agree to comply with our terms and conditions.
          </p>
        
          <h2 className="text-2xl font-semibold mt-8">User Responsibilities</h2>
          <p className="text-lg text-gray-600 mt-4">
            You agree to use our services legally and ethically. Any misuse, fraudulent activity, or breach of these terms may lead to termination of access.
          </p>
        
          <h2 className="text-2xl font-semibold mt-8">Intellectual Property</h2>
          <p className="text-lg text-gray-600 mt-4">
            All content, logos, and materials on this website are owned by Sky Scraper Skill. Unauthorized use is strictly prohibited.
          </p>
        
          <h2 className="text-2xl font-semibold mt-8">Limitation of Liability</h2>
          <p className="text-lg text-gray-600 mt-4">
            Sky Scraper Skill is not responsible for any direct, indirect, or consequential damages arising from the use of our website or services.
          </p>
        
          <h2 className="text-2xl font-semibold mt-8">Changes to Terms</h2>
          <p className="text-lg text-gray-600 mt-4">
            We may update these terms periodically. Continued use of our services constitutes acceptance of any changes.
          </p>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6 mt-12">
          <p>&copy; 2025 Sky Scraper Skill. All rights reserved.</p>
        </footer>
      </div>
    );
  }
  