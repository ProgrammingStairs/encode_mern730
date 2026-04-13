import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './components/Home.js';
import Header from './components/Header.js';
import AddUser from './components/AddUser.js';
import ViewUsers from './components/ViewUsers.js';
import Navbar from './components/Navbar.js';

function App() {
  return (<>
    <Router>
      <Header/>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/addUser" element={<AddUser/>}></Route>
        <Route path="/viewUsers" element={<ViewUsers/>}></Route>
      </Routes>
    </Router>
  </>);
}

export default App;
