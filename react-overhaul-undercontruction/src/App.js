import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import HorizontalRule from './Components/HorizontalRule/HorizontalRule.jsx';
import AboutPage from './Components/AboutPage/AboutPage.jsx';
import HomePage from './Components/HomePage/HomePage.jsx';
import LeisurePage from './Components/LeisurePage/LeisurePage.jsx';
import SkillsPage from './Components/SkillsPage/SkillsPage.jsx';
import LichessPage from './Components/LiChessPage/LiChessPage.jsx';

class App extends Component {

  render = () => {
    return (
      <span>
        <Header />
        <AboutPage />
        <Footer />
      </span>
    );
  }
}

export default App;