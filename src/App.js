import React, { Component } from 'react';
import './App.css';
import { Button, Input, Icon } from 'react-materialize'
import Profile from './components/Profile';

class App extends Component {
  constructor (props) {
    super (props);
      this.state = {
        query: '',
        artist: null
      }
    }

  search () {
    console.log('this.state', this.state);
    const BASE_URL = 'https://api.spotify.com/v1/search?';

    // Old way with plus + signs
    // const FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';

    //new way ES6 with template sttrings (back ticks)
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;

    const accessToken ='BQCZYzsKW1jy42o8k02rAaZjuDC4RmuetmeKOl3Ho05-G4frjBunUWLE3O7Rm1iAu0VSOnAWsyO42CJnLnNWYE-8OjCXTEQuAJw9fzFbowz9WtZi2DVthrMBmUZNG4VcF0n4SOr84nVX7kk'
    console.log('FETCH_URL', FETCH_URL);

    const myOptions = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      mode: 'cors',
      cache: 'default'
    };

    fetch(FETCH_URL, myOptions)
      .then(response => response.json())
        .then(json => {
          const artist = json.artists.items[0];
          console.log('artist', artist);
          this.setState({ artist });
        });
  }

// On line 33 after the Onchange event
// onKeyPress={event => console.log('event key', event.key)}>
// to test for keypressing

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Searcher</div>

          <Input
            type="text"
            placeholder="search for a band..."
            value={this.state.query}
            onChange={event => {this.setState({query: event.target.value})}}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                this.search()
              }
            }}>
          </Input>

          <Button onClick={() => this.search()}><Icon right>search</Icon>Search</Button>


          <Profile
              artist={this.state.artist}
          />

        <div className="Gallery">
          Gallery
        </div>
      </div>
    );
  }
}

export default App;
