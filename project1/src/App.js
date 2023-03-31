import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Aboutme from './pages/Aboutme';
import Projects from './pages/Projects';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';

function App(){
return(
  <div className="App">
  <Navbar/>  
    <Routes>
      <Route path="Aboutme" element={<Aboutme/>}/>
      <Route path="Projects" element={<Projects/>}/>
      <Route path="Qualification" element={<Qualification/>}/>
      <Route path="Skills" element={<Skills/>}/>
      <Route path="Experience" element={<Experience/>}/>
      <Route path="Hobbies" element={<Hobbies/>}/>
      </Routes>
      
       
          </div>
          );  
}
export default App;
