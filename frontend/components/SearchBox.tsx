import { FaSearch, FaRocket } from "react-icons/fa";

interface SearchBoxProps {
  topic: string;
  setTopic: (value: string) => void;
  handleGenerate: () => void;
  loading: boolean;
}

export default function SearchBox({
  topic,
  setTopic,
  handleGenerate,
  loading,
}: SearchBoxProps) {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 mb-10">

      <label className="text-lg font-semibold text-gray-700">
        Research Topic
      </label>

      <div className="relative mt-4">

        <FaSearch
          className="absolute left-5 top-5 text-gray-400"
        />

        <input
          type="text"
          placeholder="Enter your research topic..."
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />

      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
      >

        <FaRocket />

        {loading ? "Generating Report..." : "Generate Report"}

      </button>

    </div>
  );
}