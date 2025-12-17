import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🚀 Demo React App</h1>
        <p>React app running successfully!</p>
        <button onClick={() => alert("Hello from React!")}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
