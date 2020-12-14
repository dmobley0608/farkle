import React from 'react';


class FarklePointButton extends React.Component{            
   
    render(){
      
        return(
            <div className=''style={{paddingTop:this.props.top, paddingRight:this.props.right}}>
                <button style={{width:this.props.wide}} onClick={()=>this.props.pointHandler(this.props.points)}>{this.props.label}</button>
            </div>
        );
    }
}
export default FarklePointButton;