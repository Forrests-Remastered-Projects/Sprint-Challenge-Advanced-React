import React from 'react';
import './App.css';
import Button from './Button';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

componentDidMount() {
  console.log("First Render (mounting)");
  fetch(`http://localhost:5000/api/players`)
    .then(res => res.json())
    .then(data => this.setState({ players: data }));
}

componentDidUpdate() {
  console.log(this.state);
}

  render() {
    return (
      <div className="App">
        <WorldCup players={this.state.players} />
      </div>
    );
  }
}

function WorldCup(props) {
  return (
  <div>
    <Button />
    <h2>Welcome to the Women's World Cup!</h2>
    <h3>Our Players are listed below!</h3>
    {props.players.map(players => (<div key={players.id}>{players.name}</div>))}
      </div>
  );
}

export default App;
