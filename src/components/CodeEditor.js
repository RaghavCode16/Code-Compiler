import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = ({ code, setCode, theme }) => {
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <Editor
      height="100%"
      defaultLanguage="javascript"
      language="javascript"
      value={code}
      onChange={handleEditorChange}
      theme={theme === "dark" ? "vs-dark" : "light"}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        wordWrap: "on",
        automaticLayout: true,
      }}
    />
  );
};

export default CodeEditor;
