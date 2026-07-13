interface ReportCardProps {
  report: string;
  topic: string;
}

export default function ReportCard({
  report,
  topic,
}: ReportCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6">

        <h2 className="text-3xl font-bold text-white">
          📄 AI Research Report
        </h2>

        <p className="text-blue-100 mt-2">
          Topic: <span className="font-semibold">{topic}</span>
        </p>

        <p className="text-blue-100 text-sm mt-1">
          Generated: {new Date().toLocaleString()}
        </p>

      </div>

      {/* Body */}

      <div className="p-8">

        <div className="whitespace-pre-wrap leading-8 text-gray-700 text-[16px]">

          {report}

        </div>

      </div>

    </div>
  );
}