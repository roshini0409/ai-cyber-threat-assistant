import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchThreat = async () => {
    console.log("Button clicked");

    if (!query) {
      alert("Enter a query first");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: query }),
      });

      console.log("Response status:", res.status);

      const data = await res.json();
      console.log("Response data:", data);

      setResults(data.results || []);
    } catch (err) {
      console.error("Fetch error:", err);
      alert("Backend connection failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">
        🛡️ AI Cyber Threat Assistant
      </h1>

      <div className="w-full max-w-2xl flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Ask about a security threat..."
          className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={searchThreat}
          className="bg-cyan-500 hover:bg-cyan-600 px-4 rounded-lg font-semibold"
        >
          Analyze
        </button>
      </div>

      <div className="w-full max-w-2xl space-y-4">
        {results.length === 0 ? (
          <p className="text-gray-400 text-center">No results yet...</p>
        ) : (
          results.map((r, i) => (
            <div
              key={i}
              className="p-4 bg-gray-900 border border-gray-800 rounded-xl"
            >
              <p className="text-lg">{Array.isArray(r) ? r[0] : r.text}</p>
              <p className="text-sm text-cyan-400">
                Similarity:{" "}
                {Array.isArray(r)
                  ? r[1].toFixed(2)
                  : (r.score ?? 0).toFixed(2)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}