import React from 'react';
import Homepage from './components/HomePage';

import './App.css';
import PlayCardOrganizer from './components/PlayCardOrganizer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numberOfPlayers : 0,
      route: "home",
      players: []
    }
  }

  onRouteChange = (route) =>{
    if(this.state.numberOfPlayers === 0) return 1;
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
    if(this.state.numberOfPlayers === 0){
     alert("Please select the number of players.")
      this.setState({
        route:'home'
      });
    }else{
        const promptPlayer = [];     
        for(let i = this.state.numberOfPlayers; i>0; i-- ){ 
          let player = prompt("Enter play name.");       
          if(player === '' || player=== null){
            alert("You better enter a name");
            this.setState({route:'home'});
            return 1;
          }else{    
            promptPlayer.push(player);    
            this.setState({players: promptPlayer});     
          }
          
        }
    }
  }


  render(){
  return (
    <div className="App">
      {this.state.route === "home"
      ?<Homepage onRouteChange = {this.onRouteChange}
                  playerSelector = {this.playerSelector}
                  getPlayerNames = {this.getPlayerNames}/>
      :<PlayCardOrganizer players={this.state.players} numberOfPlayers={this.state.numberOfPlayers}/>
      }        
    </div>
  );
  }
}

export default App;
