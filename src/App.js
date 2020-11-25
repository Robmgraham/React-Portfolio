import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/about.js"
import Contact from "./pages/contact"
import Portfolio from "./pages/portfolio"
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/portfolio" component={Portfolio}/>
      </Switch>
    </Router>
  );
}

export default App;
