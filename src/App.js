import React, { Component } from 'react';
// import logo from './logo.svg';
import NormalizedRoller from './utilities/normal-roller';
import Plot from 'react-plotly.js';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentRoll: 0,
            outcomes: []
        };
        this.roller = new NormalizedRoller();
    }

    rollDice = () => {
        const newRoll = this.roller.getNextRoll();
        this.setState({
            currentRoll: newRoll,
            outcomes: this.roller.getObservations()
        });
    }

    simulate = () => {
        for(let i = 0; i < 60; i++) {
            this.roller.getNextRoll();
        }
        this.rollDice();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.currentRoll}</h1>
          <button onClick={this.rollDice}>Roll!</button>
          <button onClick={this.simulate}>Simulate a game!</button>
          <Plot
            data={[{type: 'bar', x:[2,3,4,5,6,7,8,9,10,11,12], y:this.state.outcomes}]}
            layout={{width: 800, height: 800, title: 'Rolls!'}}
          />
        </header>
      </div>
    );
  }
}

export default App;
