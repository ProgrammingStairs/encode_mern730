import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import HomeComponent from './components/HomeComponent.js';
import AboutComponent from './components/AboutComponent.js';
import ContactComponent from './components/ContactComponent.js';
import ServicesComponent from './components/ServicesComponent.js';
import ContactComponent1 from './components/ContactComponent1.js';
import ContactComponent2 from './components/ContactComponent2.js';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
// import { Route, HashRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <HeaderComponent/>
      <NavbarComponent/>
      <Routes>
        <Route path='/home' element={<HomeComponent/>}/>
        <Route path='/about' element={<AboutComponent/>}/>
        <Route path='/contact' element={<ContactComponent/>}>
          <Route path='contactComponent1' element={<ContactComponent1/>}/>
          <Route path='contactComponent2' element={<ContactComponent2/>}/>
        </Route>
        <Route path='/services' element={<ServicesComponent/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
