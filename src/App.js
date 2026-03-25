import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🚀DemoReactApp</h1>
        <p>Demo React app running successfully!</p>
        <button onClick={() => alert("Hello from React!")}>
          Click Me
        </button>
      </header>
    </div>
  );
}

export default App;
