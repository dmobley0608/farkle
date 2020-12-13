import React from 'react';
import Homepage from './components/HomePage';

import './App.css';
import PlayCardOrganizer from './components/PlayCardOrganizer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numberOfPlayers : 4,
      route: "home",
      players: ["Dwight", "Meygan", "Taylor", "Cash"]
    }
  }

  onRouteChange = (route) =>{
    this.setState({
      route: route
    });
  }

  playerSelector = (i) =>{
    this.setState({
      numberOfPlayers: i
    });
  }

  getPlayerNames = ()=>{
    const promptPlayer = [];
   for(let i = this.state.numberOfPlayers; i>0; i-- ){
    let player = prompt("Enter play name.")
    
    promptPlayer.push(player);
    this.setState({players: promptPlayer});
    console.log(this.state.players);
   }     
   
  }


  render(){
  return (
    <div className="App">
      {this.state.route === "home"
      ?<Homepage onRouteChange = {this.onRouteChange}
                  playerSelector = {this.playerSelector}
                  getPlayerNames = {this.getPlayerNames}/>
      :<PlayCardOrganizer players={this.state.players}
                          numberOfPlayers={this.state.numberOfPlayers}/>
      }        
    </div>
  );
  }
}

export default App;
