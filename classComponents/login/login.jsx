import React from 'react';
export class Login extends React.Component{
    constructor(){
        super();
        this.state={
            Id:1,
            Name:"iPhone 15",
            Price:150000,
            Stock:"Available",
            State:["Delhi","Bihar"],
            Rating:{Rate:40,Count:5669}
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <h3>Products Details</h3>
                <dl>
                    <dt>Id:</dt>
                    <dd>{this.state.Id}</dd>
                    <dt>Name:</dt>
                    <dd>{this.state.Name}</dd>
                    <dt>Price</dt>
                    <dd>{this.state.Price}</dd>
                    <dt>Stock</dt>
                    <dd>{this.state.Stock}</dd>
                    <dt>State</dt>
                    <dd><ol>
                        {
                            this.state.State.map(cities=>
                                <li key={cities}>{cities}</li>)
                        }</ol></dd> 
                    <dt>Rating</dt>    
                    <dd>{this.state.Rating.Rate}</dd>  
                </dl>
                <button className="btn btn-success">submit</button>
            </div>
        )
    }
}