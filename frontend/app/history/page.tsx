"use client";

import { useEffect, useState } from "react";
import {
  FaHistory,
  FaFileAlt,
  FaCalendarAlt,
  FaEye,
  FaEyeSlash,
  FaTrash,
} from "react-icons/fa";

interface HistoryItem {
  topic: string;
  report: string;
  date: string;
}

export default function History() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/history`
);

      if (!response.ok) {
        throw new Error("Failed to fetch history");
      }

      const data = await response.json();
      setHistory(data.history || []);
    } catch (error) {
      console.error(error);
      alert("Failed to load history.");
    } finally {
      setLoading(false);
    }
  };

  const deleteHistory = async (index: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/history/${index}`,
  {
    method: "DELETE",
  }
);

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      await fetchHistory();

      if (expandedIndex === index) {
        setExpandedIndex(null);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete report.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="text-center mb-10">
            <div className="flex justify-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-full shadow-lg">
                <FaHistory className="text-white text-5xl" />
              </div>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Research History
            </h1>

            <p className="mt-4 text-gray-600">
              All your generated AI research reports.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-lg text-gray-500">
              Loading history...
            </p>
          ) : history.length === 0 ? (
            <div className="text-center text-lg text-gray-500">
              No research reports found.
            </div>
          ) : (
            <div className="space-y-6">
              {history.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl shadow-lg border p-6 hover:shadow-2xl transition"
                >
                  <div className="flex justify-between items-start flex-wrap gap-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-blue-700">
                        {item.topic}
                      </h2>

                      <div className="flex items-center gap-2 mt-2 text-gray-500">
                        <FaCalendarAlt />
                        {item.date}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          setExpandedIndex(
                            expandedIndex === index ? null : index
                          )
                        }
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition shadow-lg"
                      >
                        {expandedIndex === index ? (
                          <>
                            <FaEyeSlash />
                            Hide Report
                          </>
                        ) : (
                          <>
                            <FaEye />
                            View Full Report
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => deleteHistory(index)}
                        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl transition shadow-lg"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  </div>

                  <hr className="my-5" />

                  <div className="flex items-center gap-2 mb-4">
                    <FaFileAlt className="text-blue-600" />
                    <h3 className="text-lg font-semibold">Report</h3>
                  </div>

                  <p className="text-gray-700 whitespace-pre-wrap leading-7">
                    {expandedIndex === index
                      ? item.report
                      : item.report.length > 600
                      ? item.report.substring(0, 600) + "..."
                      : item.report}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
            