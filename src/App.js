import React, { useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import OutputPanel from "./components/OutputPanel";
import InputPanel from "./components/InputPanel";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [code, setCode] = useState("// Write your code here");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleRunCode = () => {
    try {
      if (language === "javascript") {
        const wrappedCode = `
        const input = \`${input}\`;
        return (function() {
          ${code}
        })();
      `;
        const result = new Function(wrappedCode)();
        setOutput(String(result));
      } else {
        setOutput(
          `Language '${language}' is not supported in frontend-only mode.`
        );
      }
    } catch (err) {
      setOutput("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-all">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex-1 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {"</>"}Code Compiler
          </h1>
        </div>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      {/* Main Panels */}
      <div className="flex gap-6 h-[75vh]">
        {/* Code Editor Panel */}

        <div className="flex-1 bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-lg flex flex-col">
          {/* Dropdown */}
          <div className="flex justify-end items-center gap-2 mb-2">
            <label htmlFor="language-select" className="text-sm font-medium">
              Select Language:
            </label>
            <select
              id="language-select"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded shadow"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
            </select>
          </div>

          {/* Editor */}
          <div className="flex-1 min-h-[400px]">
            <CodeEditor code={code} setCode={setCode} theme={theme} />
          </div>
        </div>

        {/* Output and Input Panels */}
        <div className="w-1/3 flex flex-col gap-6">
          {/* Output Panel */}
          <div className="flex-1 min-h-0 bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-lg overflow-hidden">
            <div className="h-full overflow-auto">
              <OutputPanel output={output} theme={theme} />{" "}
            </div>
          </div>

          {/* Input Panel */}
          <div className="h-[30%] bg-white dark:bg-gray-900 text-black dark:text-white p-4 rounded-xl shadow-lg">
            <InputPanel input={input} setInput={setInput} theme={theme} />
          </div>
        </div>
      </div>

      {/* Run Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleRunCode}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow"
        >
          Run Code
        </button>
      </div>
    </div>
  );
};

export default App;
