import React, { Component } from 'react';
import './App.css';
import HeaderComponent from './Components/Header';
import FormComponent from './Components/Form';
import Clock from './Components/Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Clock />
        <FormComponent />
      </div>
    );
  }
}

export default App;
