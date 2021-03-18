import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HorizontalRule from './Components/HorizontalRule/HorizontalRule';
import About from './Components/About/About';


class App extends Component {

  render = () => {
    return (
      <div className="app">
        <Header />
        <About />
        <HorizontalRule />
        <Footer />
      </div>
    );
  }
}

export default App;