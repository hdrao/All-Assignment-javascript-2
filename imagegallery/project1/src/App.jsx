import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <ul className="nav-links">
  <li>
    <a href="#">Dashboard</a>
  </li>
  <li className="center">
    <a href="#">Portfolio</a>
  </li>
  <li className="upward">
    <a href="#">Services</a>
  </li>
  <li className="forward">
    <a href="#">Feedback</a>
  </li>
</ul>
  )
}

export default App;