import {useState,useEffect} from "react"

export function DependencyComponent(){
    const [product, setProduct] = useState([{"title":"","rating":{"rate":0,"review":0},"price":0,"feature":[]}])

    function loadproduct(){
        fetch("data.json")
        .then(result=>{
            return result.json();
        })
        .then(products=>{
            setProduct(products)
        })
    }
    useEffect(() => {
        loadproduct() 
    }, [])
    return(
        <div className="container-fluid">
            {/* <button onClick={handlebuttonClick} className="btn btn-success m-4" >Get the detail</button> */}
            <div>
                {product.map(data=>
                    
                        <div className="row">
                            <div className="col-4">
                                <img src={data.image} alt="image not found"/>
                            </div>
                            <div className="col-6">
                                <p className="h4 text-success">{data.title}</p>
                                
                                    <span className="bg-success mt-2 p-1">{data.rating.rate}<span className="bi bi-star-fill text-warning"></span>
                                    </span>
                                    <span className="ms-2 text-danger">{data.rating.review}</span><span><b>Reviews</b></span>
                                
                                <ul className="mt-2">
                                    {data.feature.map(entry=>
                                        <li key={entry}>{entry}</li>)}
                                </ul>
                            </div>
                            <div className="col-2">
                                    <h3>&#8377;{data.price}</h3>
                            </div>
                        </div>
         
                    )}
            </div>
            
                
                     
                
           
        </div>
    )
}