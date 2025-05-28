import React from "react";

const InputPanel = ({ input, setInput, theme }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={`p-4 rounded-xl shadow-lg h-full flex flex-col transition-colors duration-300 ${
        isDark ? "bg-[#1e1e1e] text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Input</h2>
      <div className="flex-1 overflow-hidden">
        <textarea
          className={`w-full h-full p-3 rounded text-sm font-mono outline-none resize-none overflow-auto transition-colors duration-300
            ${
              isDark
                ? "bg-[#1e1e1e] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          spellCheck={false}
        />
      </div>
    </div>
  );
};

export default InputPanel;
