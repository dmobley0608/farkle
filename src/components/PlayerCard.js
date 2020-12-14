import React from 'react';

class PlayerCard extends React.Component{
    constructor(){
        super();
        this.state = {
            score: 0,
            tally: 0,
            input: 0,
           
        }      
    }

   resetInput = () =>{
    const score_input = document.getElementsByClassName('score_input');
    for(let i = score_input.length-1; i >= 0; i--){           
        score_input[i].value = '';         
     }
   }

    onInputChange = (event) =>{
        this.setState({input: parseInt(event.target.value)});       
     }

     tallyRolls = () =>{       
       let newScore=this.state.input + this.state.tally;
       this.setState({
           tally: newScore,
           input: 0    
       });
      this.resetInput();      
     }

     calculateScore = () => {      
         let newScore = this.state.tally + this.state.score;
         this.setState({
             score: newScore,
             tally: 0,
             input:0
         });
         this.resetInput();
     }

     farkle=()=>{       
         this.setState({
             tally: 0,
             input:0
         });
         this.resetInput();
         
     }


    render(){
        return(
            <div className='' style={{marginRight:'1em'}} >
                <div className="card mx-auto" style={{width: "25vw", marginTop:'1em' }}>                    
                        <div>
                            <h5 className="card-title text-muted mt-3">{this.props.name}</h5>
                            <h1 className="card-subtitle mb-2 text-muted">Score: {this.state.score}</h1>
                            <h2 className="card-subtitle mb-2 text-muted">Tally: {this.state.tally}</h2>
                            <input onChange={this.onInputChange} style={{width:'16em'}} type="" className="score_input form-control mx-auto" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>                       
                        <div className='' style={{marginTop:'.5em'}}>
                            <button onClick={()=>this.tallyRolls()} className='' style={{marginRight:'2em'}} type="button" class="btn btn-secondary">Add To Score</button>
                            <button onClick={()=>this.farkle()}  className='' type="button" class="btn btn-danger">FARKLE</button>
                        </div>
                        <div className='' style={{marginTop:'1em'}}>
                        <button onClick={()=>this.calculateScore()}className='' type="button" class="btn btn-primary">Submit Score</button>
                        </div>
                   
                </div>
            </div>
        );
    }
}

export default PlayerCard;