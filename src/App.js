import NavBar from './components/navbar';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HomePage />
      <Projects />
    </div>
  );
}

export default App;
