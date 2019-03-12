import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import CoffeeScoreboard from './CoffeeScoreboard/CoffeeScoreboard';
import Header from './Header';
import './App.css';
import Registration from './Authentication';

const App = () => {
  ReactDom.render(
    <Router>
      <div id="pageWrapper">
        <Header />
        <Route exact path="/" component={() => <Redirect to="/coffee" />} />
        <Route path="/coffee" component={CoffeeScoreboard} />
        <Route path="/register" component={Registration} />
      </div>
    </Router>,
    document.getElementById('root'),
  );
};


App();
