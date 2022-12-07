import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import Sidebar from './Components/MiniComponent/Sidebar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        <Sidebar/>
    </div>
  );
}

export default App;
