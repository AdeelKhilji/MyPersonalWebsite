import './App.css'
import NavbarComponent from "./Components/NavbarComponent"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import MyWork from './Pages/MyWork'
import Contact from './Pages/Contact'


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/about"  element={<About/>}/>
          <Route path="/myWork"  element={<MyWork/>}/>
          <Route path="/contact"  element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
