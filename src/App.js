import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, Icon, Row } from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-title">Music Searcher</div>


          <Input placeholder="search for a band...">
          </Input>
          <Button><Icon right>search</Icon>Search</Button>


        <div className="Profile">
          <div>Artist Pic</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
