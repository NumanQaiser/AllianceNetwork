import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import OurCompany from './Components/OurCompany';
import Management from './Components/Management';
import Footer from './Components/Footer';
import OurTechnology from './Components/OurTechnology';
import Contact from './Components/Contact';
import About from './Components/About';
import Quality from './Components/Quality';
import Affiliation from './Components/Affiliation';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <Navbar/> */}
      <Nav/>
      
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/our-company' element={<OurCompany/>} />
        <Route path='/our-management' element={<Management/>} />
        <Route path='/our-technology' element={<OurTechnology/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/quality' element={<Quality/>} />
        <Route path='/affiliate' element={<Affiliation/>} />
      </Routes>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
