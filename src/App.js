import './App.css';
import { useState } from 'react';
// import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  const [themeName, setThemeName] = useState(localStorage.getItem("portfolioTheme")?localStorage.getItem("portfolioTheme"):"dark")
  
  return (
    <div className={"App "+themeName}>
      <header className="App-header">
        <Navbar themeName={themeName} setThemeName={setThemeName}/>
      </header>
      <main>
        <Home/>
        {/* <About/> */}
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
