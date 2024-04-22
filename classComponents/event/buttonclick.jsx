import React from 'react';
export class ButtonClick extends React.Component{
    constructor(){
        super()
    }
    handleClick(){
        alert(`button clicked`);
    }
    render(){
        return(
            <div className="container-fluid">
                <button className="btn btn-success mt-4" onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
        
    
}