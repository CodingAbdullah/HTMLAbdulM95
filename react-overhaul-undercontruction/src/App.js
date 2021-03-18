import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from '../src/Components/Footer/Footer';
import Header from '../src/Components/Header/Header';
import HorizontalRule from '../src/Components/HorizontalRule/HorizontalRule';
import About from '../src/Components/About/About';


class App extends Component {

  render = () => {
    return (
      <div className="app">
        <About />
        <HorizontalRule />
        <Footer />
      </div>
    );
  }
}

export default App;