
import React from 'react';
import { NavBarClass } from '../navbar/nav_bar_class';

export class ShopClassDemo extends React.Component
{
    constructor(){
        super()
        this.state={
            categories:[],
            product:[]
        }
        
    }
    componentDidMount(){
        fetch('http://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(x=>{
            this.setState({
                categories:x
            })
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <NavBarClass name="Shopper" menu={["Home","About","Help","Shop"]}/>
                <section className="row">
                    <nav className="col-2">
                        <select name="" id="" className="form-select">
                            {
                                this.state.categories.map(category=>
                                    <option key={category}>{category}</option>)
                            }
                        </select>
                    </nav>
                    <main className="col-10">

                    </main>
                </section>
            </div>
        )
    }
}