import React from 'react';
import FarklePointButton from './FarklePointButton'

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

     farkleButtonPointHandler = (points)=>{         
         let oldTally = this.state.tally;
         this.setState({tally:(oldTally+points)});
     }
     
    

    render(){
        return(
            <div className='d-flex' style={{marginRight:'1em'}} >
                <div className='border border-black rounded d-grid bg-dark p-1' style={{width:'300px', height:'375px', marginTop:'1em'}}>
                   
                    <div className='mx-auto'>
                        <p>Combinations</p>              
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={1000} label={"4 of a Kind"} wide={'200px'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={2000} label={"5 of a Kind"} wide={'200px'} top={'.25em'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={3000} label={"6 of a Kind"} wide={'200px'} top={'.25em'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={1500} label={"1-6 Straight"} wide={'200px'} top={'.25em'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={1500} label={"Three Pairs"} wide={'200px'} top={'.25em'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={1500} label={"4 with a Pair"} wide={'200px'} top={'.25em'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={2500} label={"Two Triplets"} wide={'200px'} top={'.25em'}/>                        
                   </div>
                   
                    <div className='mx-auto'>
                        <div>
                            <p>3 of a Kind</p>
                        </div>
                        <div className='d-flex'>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={300} label={"1s"} wide={'35px'}right={'.25em'}/>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={200} label={"2s"} wide={'35px'}right={'.25em'}/>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={300} label={"3s"} wide={'35px'}right={'.25em'}/>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={400} label={"4s"} wide={'35px'}right={'.25em'}/>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={500} label={"5s"} wide={'35px'}right={'.25em'}/>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={600} label={"6s"} wide={'35px'}/>       
                        </div>
                                         
                    </div>
                </div>
                <div className="card mx-auto" style={{width: "25vw", marginTop:'1em' }}>                    
                        <div>
                            <h5 className="card-title text-muted mt-3">{this.props.name}</h5>
                            <h1 className="card-subtitle mb-2 text-muted">Score: {this.state.score}</h1>
                            <h2 className="card-subtitle mb-2 text-muted">Tally: {this.state.tally}</h2>
                            <input onChange={this.onInputChange} style={{maxWidth:'16em'}} type="" className="score_input form-control mx-auto" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>                       
                        <div className='' style={{marginTop:'.5em'}}>
                            <button onClick={()=>this.tallyRolls()} className='' style={{marginRight:'2em'}} type="button" class="btn btn-secondary">Add To Tally</button>
                            <button onClick={()=>this.farkle()}  className='' type="button" class="btn btn-danger">FARKLE</button>
                        </div>
                        <div className='' style={{marginTop:'1em'}}>
                        <button onClick={()=>this.calculateScore()}className='' type="button" class="btn btn-primary">Submit Score</button>
                        </div>                   
                </div>
                if(this.)
            </div>
        );
    }
}

export default PlayerCard;