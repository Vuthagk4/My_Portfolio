import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Bot from './components/Bot';
import About from './components/About';
import Skill from './components/Skill';
import Hireme from './components/Hireme';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Bot/>
      <Hero/>
      <About/>
      <Skill/>
      <Hireme/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
