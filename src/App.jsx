import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      <Footer />
    </div>
  );
}

export default App;
