import React from 'react';
import ReactDom from 'react-dom';
import CoffeeScoreboard from './CoffeeScoreboard/CoffeeScoreboard';
import Header from './Header';

const App = () => {
  ReactDom.render(
    <div id="wrapper">
      <Header />
      <CoffeeScoreboard />
    </div>,
    document.getElementById('root'),
  );
};

App();
