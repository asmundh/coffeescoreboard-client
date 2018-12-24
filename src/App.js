import React from 'react';
import ReactDom from 'react-dom';
import CoffeeScoreboard from './CoffeeScoreboard/CoffeeScoreboard';
import Header from './Header';
import './App.css';

const App = () => {
  ReactDom.render(
    <div id="pageWrapper">
      <Header />
      <CoffeeScoreboard />
    </div>,
    document.getElementById('root'),
  );
};

App();
