import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import HomeComponent from './components/HomeComponent.js';
import LoginComponent from './components/LoginComponent.js';
import RegisterComponent from './components/RegisterComponent.js';
import ProfileComponent from './components/ProfileComponent.js';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (<>
    <Router>
      <HeaderComponent/>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<HomeComponent/>}/>
        <Route path='/login' element={<LoginComponent/>}/>
        <Route path='/register' element={<RegisterComponent/>}/>
        <Route path='/profile' element={<ProfileComponent/>}/>
        <Route path='/logout' element={<LoginComponent/>}/>
      </Routes>
    </Router>
  </>);
}

export default App;
