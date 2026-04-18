import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';

function App() {
  return (<>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route/>  
      </Routes>  
    </Router>  
  </>);
}

export default App;
