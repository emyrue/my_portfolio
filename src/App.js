import NavBar from './components/navbar';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './style/App.css';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <HomePage />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
