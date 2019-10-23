import React, { Component } from 'react';
import DisplaySimpsons from './components/DisplaySimpsons';
import axios from 'axios';
import './App.css';


const sampleSimpson = {
  image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593',
  character: 'Abe Simpson',
  quote: 'Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?' 
  };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      character: sampleSimpson 
    }

  this.getSimpsons = this.getSimpsons.bind(this);
  }

  getSimpsons() {
    // Send the request
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          character: data[0],
        });
    });
  }

  render() {
  return (
    <div className="App">
      <DisplaySimpsons character={this.state.character}/>
      <button type="button" onClick={this.getSimpsons}>Get Simpsons</button>
      
    </div>
  );
}
}

export default App;
