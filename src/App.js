import NavBar from './components/navbar';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HomePage />
      <Projects />
      <About />
    </div>
  );
}

export default App;
