import './App.css'
import NavbarComponent from "./Components/NavbarComponent"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import MyWork from './Pages/MyWork'
import Contact from './Pages/Contact'


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent/>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/myWork">
            <MyWork/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
