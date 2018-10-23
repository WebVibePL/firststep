import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    output: 'No data yet'
  }

  clickHandler = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        this.setState({
          output: response.data.title
        });
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Get Students test</h1>
        <button onClick={this.clickHandler}>Get all students</button>
        <p>{this.state.output}</p>
      </div>
    );
  }
}

export default App;
