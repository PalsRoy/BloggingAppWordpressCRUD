import React, { Component } from 'react';
import PostIndex from './post_index';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
          <img className="App-logo" alt="logo" />
        </header>
          <div>
          <PostIndex />
          </div>
           <p className="App-intro">To get started, edit App and save to reload.</p>
    </div>
    );
  }
}
