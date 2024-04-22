import React from 'react';
export class ButtonEventClick extends React.Component{
    constructor(){
        super()
        this.state={
            message:""
        }
        this.handleInsertClick=this.handleInsertClick.bind(this)
    }
    handleInsertClick(){
        this.setState({
            message:'record inserted'
        })
    }
    handleDeleteClick(){
        this.setState({
            message:'record deleted successfully'
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <button className="btn btn-success m-4" onClick={this.handleInsertClick}>Click Me</button>
                <button className="btn btn-primary m-4" onClick={this.handleDeleteClick.bind(this)}>Record Deleted</button>
                <p className="h1">{this.state.message}</p>
            </div>
        )
    }
        
    
}