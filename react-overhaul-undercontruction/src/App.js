import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import HorizontalRule from './Components/HorizontalRule/HorizontalRule.jsx';
import About from './Components/About/About.jsx';
import Home from './Components/Home/Home.jsx';
import Leisure from './Components/Leisure/Leisure.jsx';
import Skills from './Components/Skills/Skills.jsx';

class App extends Component {

  render = () => {
    return (
      <div className="app">
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;