import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import LeftSection from './components/LeftSection.js';
import RightSection from './components/RightSection.js';
import Footer from './components/Footer.js';

function App() {
  return (<>
    <Header/>
    <div id="box">
      <LeftSection/>
      <RightSection/>
    </div>
    <Footer/>
  </>);
}

export default App;
