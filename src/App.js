import React, { Component } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import CoffeeScoreboard from './CoffeeScoreboard/CoffeeScoreboard';

const App = () => {
  ReactDom.render(
    <div id="wrapper">
      <CoffeeScoreboard />
    </div>,
    document.getElementById('root'),
  );
};

App();
