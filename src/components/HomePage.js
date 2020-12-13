import React from 'react';


class Homepage extends React.Component{
    constructor(){
        super();
        this.state={
            selected: true
        }
    }

    selectorHandler=(i)=>{
        const selection = document.getElementById(i);
        
        if(this.state.selected === true){
            selection.classList.add('selected');
            this.setState({selected:false});
        }else{
            selection.classList.remove('selected');
            this.setState({selected:true});
        }

    }
    render(){
        return(
            <div>
                <div className='p-2' style={{marginTop:'25vh'}}>
                    <h1 className='animate__animated animate__rollIn'>Let's Play Farkle</h1>
                </div>
                <div className='mt-5'>
                    <h2>How many players are there?</h2>
                </div>
                <div className='mt-5 '>
                    <div className='w-25 mx-auto border border-4 p-2 shadow-lg p-3 mb-5 bg-secondary rounded  'style={{}}>
                        <h3 id='p1' onClick={()=>{this.props.playerSelector(1); this.selectorHandler('p1');}} className='w-75 grow pointer mx-auto rounded'>1 player</h3>
                        <h3 id='p2' onClick={()=>{this.props.playerSelector(2); this.selectorHandler('p2');}}className='w-75 grow pointer mx-auto rounded'>2 players</h3>
                        <h3 id='p3' onClick={()=>{this.props.playerSelector(3); this.selectorHandler('p3');}}className='w-75 grow pointer mx-auto rounded'>3 players</h3>
                        <h3 id='p4' onClick={()=>{this.props.playerSelector(4); this.selectorHandler('p4');}}className='w-75 grow pointer mx-auto rounded'>4 players</h3>
                    </div>
                    
                </div>
                <div className='mt-5'>
                    <button onClick={()=>{this.props.getPlayerNames();this.props.onRouteChange('scoreCards')}} type="button" class="btn btn-primary btn-lg">Let's Play</button>
                </div>
              
            </div>
        );
    }
}
export default Homepage;