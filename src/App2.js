import React, { Component } from 'react';
import axios from 'axios';
import ReactDom from 'react-dom';
import CoffeeScoreboard from './CoffeeScoreboard/CoffeeScoreboard';

class App extends Component {
  getEntries() {
    this.data = axios.get('http://localhost:3000/users/')
      .then(response => response)
      .catch((error) => {
        console.log(error);
      });
  }

  ReactDom.render(
    <div id="wrapper">
      <Header />
      <CoffeeScoreboard data={this.data} />
    </div>,
    document.getElementById('root'),
  );
}

export default App;
