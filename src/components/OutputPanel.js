import React from "react";

const OutputPanel = ({ output, theme }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`p-4 rounded-xl shadow-lg h-full flex flex-col transition-colors duration-300 ${
        isDark ? "bg-[#1e1e1e] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Output</h2>
      <pre
        className={`w-full h-full p-3 rounded text-sm font-mono overflow-auto transition-colors duration-300
          ${
            isDark
              ? "bg-[#1e1e1e] text-white"
              : "bg-white text-black border border-gray-300"
          }`}
      >
        {output}
      </pre>
    </div>
  );
};

export default OutputPanel;
