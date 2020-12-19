import './App.css';
import Header from './components/Header.js';
import Slogan from './components/Slogan.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';

function App() {
	return (
		<div className='App'>
			<Header />
			<Slogan />
			<About />
			<Services />
			<Contact />
		</div>
	);
}

export default App;
