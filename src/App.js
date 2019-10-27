import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom';
import socketIo from 'socket.io-client';
import CoffeeScoreboard from './CoffeeScoreboard/CoffeeScoreboard';
import './App.css';
import Registration from './Registration';
import '@babel/polyfill';
import 'sanitize.css';


export const socket = socketIo('http://localhost:3000');
socket.on('connection', () => {
  console.log('Connected with socket.io');
});

export const App = () => {
  ReactDom.render(
    <Router>
      <div id="pageWrapper">
        <Route exact path="/" component={() => <Redirect to="/coffee" />} />
        <Route path="/coffee" component={CoffeeScoreboard} />
        <Route exact path="/register" component={CoffeeScoreboard} />
        <Route path="/register/:rfid" component={Registration} />
      </div>
    </Router>,
    document.getElementById('root'),
  );
};


App();
