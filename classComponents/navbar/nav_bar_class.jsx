
import React from 'react';

export class NavBarClass extends React.Component{
    constructor(props){
        super()
    }
    render(){
        return(
            <div>
                <nav className="bg-primary text-center text-white p-2 mb-2">
                    <span className="h3">{this.props.name}</span>
                   <span>
                        {
                            this.props.menu.map(item=>
                                <button className="btn btn-danger m-2">{item}</button>)
                        }
                   </span>
                </nav>
            </div>
        )
    }
}