import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [apiResponse, setApiResponse] = useState("");

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setApiResponse(res));
  }

  useEffect(() => {
    callAPI();
});
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
        <p className="App-intro">;{apiResponse}</p>
      </div>
    );
  
}

export default App;
