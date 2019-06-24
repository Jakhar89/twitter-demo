import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './components/navigation/nav';
import Search from './components/search/search';
import Tweeting from './components/tweeting/tweeting';
import Keyword from './components/keyword/keyword';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jack Twitter API</h1>
          <Nav />
        </header>
       
          <Route path='/' exact component={Search}/>
          <Route path='/tweeting' exact component={Tweeting}/>
          <Route path='/Keyword' exact component={Keyword}/>
        
      </div>
      </Router>
    );
  }
}

export default App;
