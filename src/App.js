import React, { Component } from 'react';
import './App.css';
import Todos from "./containers/Todos/Todos"
import List from "./components/List/List"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Todos />
        <List />
      </div>
    );
  }
}

export default App;
