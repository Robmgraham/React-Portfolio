import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from "./pages/about.js"
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>

    </Router>
  );
}

export default App;
