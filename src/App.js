import React from 'react';
import ReactDom from 'react-dom';
import CoffeeScoreboard from './CoffeeScoreboard/CoffeeScoreboard';
import Header from './Header';
import './App.css';

const App = () => {
  ReactDom.render(
    <div style={{
      flex: 6,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
    >
      <Header />
      <CoffeeScoreboard />
    </div>,
    document.getElementById('root'),
  );
};

App();
