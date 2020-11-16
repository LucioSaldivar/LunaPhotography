import React, { Component } from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main';

import './App.css';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}