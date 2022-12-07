import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Sidebar from './Components/MiniComponent/Sidebar';
import About from './Components/About';
import { useRef } from 'react';
import Skill from './Components/Skill';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Intro/>
        <Sidebar/>
        <About  />
        <Skill/>
    </div>
  );
}

export default App;
