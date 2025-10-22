"use client";

import { useState, useEffect } from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackFileExplorer } from "@codesandbox/sandpack-react";

const defaultFiles: Record<string, string> = {
  "/App.js": `import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, CipherStudio!</h1>
      <p>Welcome to your browser-based React IDE.</p>
    </div>
  );
}

export default App;`,
  "/styles.css": `body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.App {
  text-align: center;
  padding: 20px;
}`,
  "/index.js": `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
  "/public/index.html": `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`,
};

export default function Home() {
  const [projectId, setProjectId] = useState<string>("default");
  const [files, setFiles] = useState(defaultFiles);
  const [projectName, setProjectName] = useState<string>("My React Project");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedProject = localStorage.getItem(`cipherstudio-${projectId}`);
    if (savedProject) {
      const parsed = JSON.parse(savedProject);
      setFiles(parsed.files);
      setProjectName(parsed.name);
    }
  }, [projectId]);

  const saveProject = () => {
    const projectData = { name: projectName, files };
    localStorage.setItem(`cipherstudio-${projectId}`, JSON.stringify(projectData));
    alert("Project saved!");
  };

  const loadProject = () => {
    const id = prompt("Enter project ID to load:");
    if (id) {
      setProjectId(id);
    }
  };

  const createNewProject = () => {
    const name = prompt("Enter new project name:");
    if (name) {
      const newId = Date.now().toString();
      setProjectId(newId);
      setProjectName(name);
      setFiles(defaultFiles);
    }
  };

  const createFile = () => {
    const fileName = prompt("Enter new file name (e.g., /newfile.js):");
    if (fileName && !files[fileName]) {
      setFiles(prev => ({ ...prev, [fileName]: "" }));
    }
  };

  const renameFile = () => {
    const oldName = prompt("Enter current file name to rename:");
    if (oldName && files[oldName]) {
      const newName = prompt("Enter new file name:");
      if (newName && !files[newName]) {
        setFiles(prev => {
          const newFiles = { ...prev };
          newFiles[newName] = newFiles[oldName];
          delete newFiles[oldName];
          return newFiles;
        });
      }
    }
  };

  const deleteFile = () => {
    const fileName = prompt("Enter file name to delete:");
    if (fileName && files[fileName]) {
      setFiles(prev => {
        const newFiles = { ...prev };
        delete newFiles[fileName];
        return newFiles;
      });
    }
  };

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">CipherStudio</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="px-2 py-1 text-black"
            placeholder="Project Name"
          />
          <button onClick={saveProject} className="bg-blue-500 px-4 py-1 rounded">
            Save
          </button>
          <button onClick={loadProject} className="bg-green-500 px-4 py-1 rounded">
            Load
          </button>
          <button onClick={createNewProject} className="bg-purple-500 px-4 py-1 rounded">
            New Project
          </button>
          <button onClick={createFile} className="bg-yellow-500 px-4 py-1 rounded">
            Create File
          </button>
          <button onClick={renameFile} className="bg-orange-500 px-4 py-1 rounded">
            Rename File
          </button>
          <button onClick={deleteFile} className="bg-red-500 px-4 py-1 rounded">
            Delete File
          </button>
          <button onClick={toggleTheme} className="bg-indigo-500 px-4 py-1 rounded">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>
      <div className="flex-1">
        <SandpackProvider
          template="react"
          files={files}
          theme={theme}
          options={{
            externalResources: ["https://cdn.tailwindcss.com"],
          }}
        >
          <SandpackLayout>
            <SandpackFileExplorer />
            <SandpackCodeEditor
              showTabs
              closableTabs
              showLineNumbers
              showInlineErrors
            />
            <SandpackPreview
              showRefreshButton
              showOpenInCodeSandbox={false}
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
}
