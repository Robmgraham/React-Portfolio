import logo from './logo.svg';
import './App.css';
import React from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/about.js"
import Contact from "./pages/contact.js"
import Portfolio from "./pages/portfolio.js"
function App() {
  return (
    <Router>
      <main>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/portfolio" exact component={Portfolio}/>
      </Switch>
      </main>
    </Router>
  );
}

export default App;
