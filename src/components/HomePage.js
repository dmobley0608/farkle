import React from 'react';


class Homepage extends React.Component{
    constructor(){
        super();
        this.state={
            selected: true
        }
    }  

    getInitialSate = () =>{
        return {
            selectedOption: '1 Player'
        };
    }

    handleOptionChange = (event) =>{
        this.setState({selectedOption: event.target.value});
    }

    render(){
        return(
            <div>
                <div className='p-2' style={{marginTop:'25vh'}}>
                    <h1 className='animate__animated animate__rubberBand'>Let's Play Farkle</h1>
                    <img  className='animate__animated animate__rollIn' alt = '' src='http://pngimg.com/uploads/dice/dice_PNG108.png' width='50px'/>
                    <img  className='animate__animated animate__rollIn' alt = '' src='http://pngimg.com/uploads/dice/dice_PNG108.png' width='50px'/>
                    <img  className='animate__animated animate__rollIn' alt = '' src='http://pngimg.com/uploads/dice/dice_PNG108.png' width='50px'/>
                    <img  className='animate__animated animate__rollIn' alt = '' src='http://pngimg.com/uploads/dice/dice_PNG108.png' width='50px'/>
                    <img  className='animate__animated animate__rollIn' alt = '' src='http://pngimg.com/uploads/dice/dice_PNG108.png' width='50px'/>
                    <img  className='animate__animated animate__rollIn' alt = '' src='http://pngimg.com/uploads/dice/dice_PNG108.png' width='50px'/>                
                </div>
                <div className='mt-5'>
                    <h2>How many players are there?</h2>
                </div>
                <div className='mt-5 homebox mx-auto'>
                    <div className='border border-4 p-2 shadow-lg p-3 mb-5 bg-secondary rounded d-flex flex-column align-items-center'>

                            <label className="btn btn-primary m-1 w-75">
                                <input type='checkbox' value='1 Player' checked ={this.state.selectedOption === '1 Player'} 
                                    onChange={this.handleOptionChange}  onClick={()=>this.props.playerSelector(1)} id='p1' className='pointer mx-3'/>
                                1 Player
                            </label>
                          
                            <label className="btn btn-primary m-1 w-75">
                                <input type='checkbox' value='2 Player' checked ={this.state.selectedOption === '2 Player'} 
                                    onChange={this.handleOptionChange}  onClick={()=>this.props.playerSelector(2)} id='p2' className='pointer mx-3'/>
                                2 Players
                            </label>          
                           
                           
                            <label className="btn btn-primary m-1 w-75">
                                <input type='checkbox' value='3 Player' checked ={this.state.selectedOption === '3 Player'} 
                                    onChange={this.handleOptionChange}  onClick={()=>this.props.playerSelector(3)} id='p3'className='pointer mx-3'/>
                                3 Players
                            </label>
                            <label className="btn btn-primary m-1 w-75" >
                                <input type='checkbox' value='4 Player' checked ={this.state.selectedOption === '4 Player'} 
                                    onChange={this.handleOptionChange}  onClick={()=>this.props.playerSelector(4)} id='p4'className='pointer mx-3'/>
                                4 Players
                            </label>
                           
                    </div>
                    
                </div>
                <div className='mt-5'>
                    <button onClick={()=>{this.props.onRouteChange('scoreCards');this.props.getPlayerNames()}} type="button" class="btn btn-primary btn-lg">Let's Play</button>
                </div>
              
            </div>
        );
    }
}
export default Homepage;