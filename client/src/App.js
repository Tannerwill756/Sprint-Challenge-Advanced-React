import React from 'react';
import axios from 'axios';
import './App.css';
import PlayerCards from './components/PlayerCards';
import NavBar from './components/NavBar';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }
  
  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then( response => {
        console.log(response.data)
        this.setState({
          players: response.data
        })
      })
  }



  render(){
    return (
      <div className="App">
        <NavBar />
        <PlayerCards playerData={this.state.players}/>
      </div>
    )
  }
}

export default App;
