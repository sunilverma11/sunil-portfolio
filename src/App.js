import './App.css';
// import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App dark">
      <header className="App-header">
        <Navbar/>
      </header>
      <main>
        <Home/>
        {/* <About/> */}
        <Experience/>
        <Skills/>
        <Projects/>
        <Contact/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
