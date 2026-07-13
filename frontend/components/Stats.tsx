import { FaGlobe, FaBrain, FaFileAlt } from "react-icons/fa";

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">

        <div className="flex justify-center">
          <FaGlobe className="text-blue-600 text-4xl" />
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Tavily Search
        </h2>

        <p className="mt-2 text-gray-500">
          Searches trusted websites for your topic.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">

        <div className="flex justify-center">
          <FaBrain className="text-purple-600 text-4xl" />
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Groq AI
        </h2>

        <p className="mt-2 text-gray-500">
          Generates professional research reports.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300">

        <div className="flex justify-center">
          <FaFileAlt className="text-green-600 text-4xl" />
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          PDF Export
        </h2>

        <p className="mt-2 text-gray-500">
          Download your report as a PDF instantly.
        </p>

      </div>

    </div>
  );
}