import './App.css';
import Header from './components/Header.js'
import Slogan from './components/Slogan.js'
import About from './components/About.js'
import Services from './components/Services.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Slogan />
      <About />
      <Services />
    </div>
  );
}

export default App;
