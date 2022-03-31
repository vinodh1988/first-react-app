import { BrowserRouter as Router,Route,Link } from "react-router-dom" 
import App from "./App"
import About from "./Components/About"
import Contact from "./Components/Contact"

const Home =()=>{
   return(
       <Router>
<nav className="navbar navbar-expand-sm bg-success navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/">ABC Company</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>
<Route path="/" exact component={App} ></Route>
<Route path="/about"  component={About} ></Route>
<Route path="/contact" component={Contact} ></Route>
       </Router>
   )
}

export default Home