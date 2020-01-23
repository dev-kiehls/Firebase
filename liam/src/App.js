import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Whelcome to Liam's Hideout.</h1>
        <p>
          This is Liam. My Korean name is Seonghwa Jeong.
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/dev.liam/"          
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="App-link"          
          href="https://www.facebook.com/profile.php?id=100007198037781"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </header>
    </div>
  );
}

export default App;
