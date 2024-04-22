import {useEffect,useState} from 'react'

export function DynamicGrid(props){
    
    if(props.view==="grid"){
        return(
            <div>
                <h2>Grid View</h2>
                <div>
                    <table className="table table-hover">
                        <tbody>
                            <tr>
                                {
                                    props.data.map(item=>
                                        <td>
                                            <img src={item.image} height="200" width="200" alt="image not found"/>
                                        </td>)
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    else if(props.view==="card"){
        return(
            <div className="d-flex">
                <div>
                    <h2>Card View</h2>
                    <div className="d-flex">
                        {
                            props.data.map(item=>
                                <div>
                                    <div className="card me-4">
                                        <img src={item.image} height="200" width="200" alt="image not found" className="card-img-top"/>
                                    </div>
                                </div>)
                        }
                    </div>
                    
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <h2>Please Choose One</h2>
            </div>
        )
    }
}