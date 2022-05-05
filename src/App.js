import './App.css';
import Hero from './components/hero/Hero.js';
import {Navbar} from './components/navbar/Navbar.js';
import {Data} from './components/data/Data.js'
import {Cloud} from './components/cloud/Cloud.js'
import {Footer} from './components/footer/Footer.js'


function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Data/>
      <Cloud/>
      <Footer/>
    </>
  );
}

export default App;