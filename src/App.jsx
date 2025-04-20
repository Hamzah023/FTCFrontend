import './App.css'

import { useState } from "react";
import axios from "axios";

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFileDrop = async (e) => {
    e.preventDefault();
    setDragging(false);
    setLoading(true);

    const file = e.dataTransfer?.files?.[0] || e.target.files?.[0];

    if (!file || !file.name.endsWith(".pages")) {
      alert("Please upload a .pages file");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:8000/convert", formData, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      alert("Conversion failed. Make sure the backend is running.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">📄 Convert .pages to PDF</h1>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleFileDrop}
        className={`relative w-full max-w-3xl mx-auto border-4 border-dashed rounded-xl p-12 text-center cursor-pointer transition ${
          dragging ? "border-blue-400 bg-blue-100" : "border-gray-300 bg-white"
        }`}
      >
        <input
          type="file"
          accept=".pages"
          onChange={handleFileDrop}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        <p className="text-lg font-medium">Drag and drop a <code>.pages</code> file here</p>
        <p className="text-sm text-gray-500 mt-1">or click to browse</p>
      </div>

      {loading && (
        <div className="text-center mt-6 text-blue-600 font-medium animate-pulse">⏳ Converting...</div>
      )}

      {pdfUrl && (
        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">🖨️ Converted PDF</h2>
          <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" className="border rounded-lg" />
          <a
            href={pdfUrl}
            download="converted.pdf"
            className="inline-block mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
