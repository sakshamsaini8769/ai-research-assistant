"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import SearchBox from "@/components/SearchBox";
import ReportActions from "@/components/ReportActions";
import ReportCard from "@/components/ReportCard";
import { jsPDF } from "jspdf";

export default function Home() {
  const [topic, setTopic] = useState("");
  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      alert("Please enter a research topic.");
      return;
    }

    try {
      setLoading(true);
      setReport("");

      const response = await fetch("http://127.0.0.1:8000/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate report");
      }

      const data = await response.json();

      setReport(data.report);
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("AI Research Report", 20, 20);

    doc.setFontSize(12);

    const lines = doc.splitTextToSize(report, 170);

    doc.text(lines, 20, 35);

    doc.save("Research_Report.pdf");
  };

  const copyReport = async () => {
    try {
      await navigator.clipboard.writeText(report);
      alert("Report copied successfully!");
    } catch {
      alert("Failed to copy report.");
    }
  };

  const clearReport = () => {
    setTopic("");
    setReport("");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-12 px-5">

        <div className="max-w-7xl mx-auto">

          <Hero />

          <Stats />

          <SearchBox
            topic={topic}
            setTopic={setTopic}
            handleGenerate={handleGenerate}
            loading={loading}
          />

          {report && (
            <>
              <ReportActions
                downloadPDF={downloadPDF}
                copyReport={copyReport}
                clearReport={clearReport}
              />

              <ReportCard
                report={report}
                topic={topic}
              />
            </>
          )}

        </div>

      </main>
    </>
  );
}