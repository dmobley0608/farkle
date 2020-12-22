import React from 'react';
import FarklePointButton from './FarklePointButton'
import '../App.css'; 

class PlayerCard extends React.Component{
    constructor(){
        super();
        this.state = {
            score: 0,
            tally: 0,
            runningScore: 0,
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
            <div className='d-flex playercard' style={{marginRight:'1em'}} >
                <div className='mobilebox border border-black rounded d-grid bg-dark p-1' style={{width:'300px',  marginTop:'1em'}}>

                    <div id='onesandfives' className='mx-auto'>                        
                        <p style={{marginBottom:'.25em'}}>1s and 5s</p>
                        <div className='d-flex' style={{marginTop:'0em'}}>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={100} label={"1s"} wide={'35px'} right={'3em'}/>
                            <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={50} label={"5s"} wide={'35px'} />           
                        </div>                       
                                                       
                    </div>
                   
                    <div className='mx-auto'>
                        <p style={{marginBottom:'.25em'}}>Combinations</p>              
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
                            <p style={{marginBottom:'.25em'}}>3 of a Kind</p>
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
                    <div>
                        <p style={{marginBottom:'.25em'}}>Score Adjustment</p>
                    </div>
                    <div className='d-flex mx-auto mt-0'>                        
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={-50} label={"-50"} wide={'65px'}right={'.25em'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={-100} label={"-100"} wide={'65px'}right={'.25em'}/>
                        <FarklePointButton pointHandler={this.farkleButtonPointHandler} points={-1000} label={"-1000"} wide={'65px'}/>       
                    </div>
                </div>
                <div className="card mx-auto " style={{width: "30vw", marginTop:'1em' }}>                    
                        <div>
                            <h5 className="card-title text-muted mt-3">{this.props.name}</h5>
                            <img  className='animate__animated animate__wobble' alt = '' src='http://pngimg.com/uploads/dice/dice_PNG108.png' width='25px'/>
                            <h3 id='score' className="card-subtitle mb-2 text-muted">Score: {this.state.score}</h3>
                            <h5 id='tallyscore' className="card-subtitle mb-2 text-muted">Tally: {this.state.tally}</h5>
                            <p className="runningScore card-subtitle mb-2 text-muted">Possible Total: {this.state.score + this.state.tally}</p>
                            <input id='scoreinput' onChange={this.onInputChange} style={{maxWidth:'16em'}} type="" className="score_input form-control mx-auto" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                        </div>
                      <div className='mx-auto'>
                      <div id='tally_farkle' className='' style={{marginTop:'.5em'}}>
                            <button id= 'tally'  onClick={()=>{this.tallyRolls();}} className='' style={{width:'200px'}} type="button" class="btn btn-secondary">Add To Tally</button>
                        </div>
                        <div className='' style={{marginTop:'1em'}}>
                            <button id='farkle' onClick={()=>this.farkle()}  className='' style={{width:'200px', marginTop:''}} type="button" class="btn btn-danger">FARKLE</button>
                        </div>                        
                        <div id='submit' className='' style={{marginTop:'1em'}}>
                            <button onClick={()=>this.calculateScore()}className='' style={{width:'200px'}} type="button" class="btn btn-primary">Submit Score</button>                   
                        </div>        
                      </div>
                              
                </div>           
                
            </div>
        );
    }
}

export default PlayerCard;