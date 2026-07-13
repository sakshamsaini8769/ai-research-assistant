import {
  FaRobot,
  FaGlobe,
  FaBrain,
  FaFire,
  FaCode,
} from "react-icons/fa";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-5">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <div className="text-center">

            <div className="flex justify-center">

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-full shadow-lg">

                <FaRobot className="text-white text-5xl" />

              </div>

            </div>

            <h1 className="mt-6 text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About AI Research Assistant
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              An AI-powered platform that generates professional research
              reports using real-time web data and Artificial Intelligence.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <div className="bg-blue-50 rounded-2xl p-6 shadow">

              <h2 className="text-2xl font-bold text-blue-700 mb-4">
                🚀 Features
              </h2>

              <ul className="space-y-3 text-gray-700">

                <li>✅ AI Research Report Generation</li>
                <li>✅ Real-time Web Search</li>
                <li>✅ Website Content Scraping</li>
                <li>✅ PDF Download</li>
                <li>✅ Copy Report</li>
                <li>✅ Modern Responsive UI</li>

              </ul>

            </div>

            <div className="bg-indigo-50 rounded-2xl p-6 shadow">

              <h2 className="text-2xl font-bold text-indigo-700 mb-4">
                🛠 Technologies Used
              </h2>

              <div className="space-y-4">

                <div className="flex items-center gap-3">
                  <FaCode className="text-blue-600 text-xl" />
                  <span>Next.js + TypeScript + Tailwind CSS</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaRobot className="text-purple-600 text-xl" />
                  <span>FastAPI (Python)</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaGlobe className="text-green-600 text-xl" />
                  <span>Tavily API</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaFire className="text-orange-600 text-xl" />
                  <span>Firecrawl API</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBrain className="text-pink-600 text-xl" />
                  <span>Groq AI</span>
                </div>

              </div>

            </div>

          </div>

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 shadow">

            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              📖 Project Workflow
            </h2>

            <div className="text-gray-700 leading-8">

              User enters a research topic → Tavily searches trusted websites →
              Firecrawl extracts website content → Groq AI analyzes the data and
              generates a professional research report → User can download the
              report as a PDF.

            </div>

          </div>

          <div className="mt-10 text-center text-gray-500">

            <p>Developed using Modern AI Technologies.</p>

            <p className="mt-2">
              © 2026 AI Research Assistant
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}