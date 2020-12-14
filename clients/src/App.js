import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import home from './home/home';

export class App extends Component {
  
 
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={home} />
          <Redirect from='*' to='/' />
        </Switch>
      </Router>
    );
  }
}
export default App;
