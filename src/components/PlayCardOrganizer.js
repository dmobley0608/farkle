import React from 'react';
import PlayerCard from './PlayerCard';


class PlayCardOrganizer extends React.Component{
   

    render(){

        return(
            <div className='mt-5 mx-auto' style={{Height:'100vh', Width:'100vw'}}>
                <div className='d-flex flex-wrap mx-auto justify-content-center'>
                {this.props.players.map((user, i)=>{
                return(
                    
                        <div key={i} id={this.props.players[i]}>
                        <PlayerCard
                            name = {this.props.players[i]}/>
                    </div>
             );})}
                </div>
               
             </div>     
               
          
        );
    }
}

export default PlayCardOrganizer;