import { FaFilePdf, FaCopy, FaTrash } from "react-icons/fa";

interface ReportActionsProps {
  downloadPDF: () => void;
  copyReport: () => void;
  clearReport: () => void;
}

export default function ReportActions({
  downloadPDF,
  copyReport,
  clearReport,
}: ReportActionsProps) {
  return (
    <div className="flex flex-wrap justify-end gap-4 mb-6">

      <button
        onClick={downloadPDF}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
      >
        <FaFilePdf />
        Download PDF
      </button>

      <button
        onClick={copyReport}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
      >
        <FaCopy />
        Copy Report
      </button>

      <button
        onClick={clearReport}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
      >
        <FaTrash />
        Clear
      </button>

    </div>
  );
}