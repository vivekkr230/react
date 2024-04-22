import {useState,useEffect} from "react"

export function NasaApiComponent(){
    const[data,setData]=useState({"photos":[{"id":0,"sol":0,"img_src":"","rover":{"id":0,"name":"","cameras":[{"name":"","full_name":""}]}}]})
    function loadcomponent(){
        fetch("nasa.json")
        .then(data => data.json())
        .then(result => setData(result))
        
    }
    useEffect(() => {
        loadcomponent() 
    }, [])
    return(
        <div className="d-flex">
            {
                data.photos.map(res=>
                    <div className="card w-25 m-4">
                    <div className="card-header">
                        <img  src={res.img_src} className="w-100" alt="image not found"/>
                    </div>
                    <div className="card-body">
                        <p><span className="me-2"><b>id:</b></span>{res.id}</p>
                        <p><span className="me-2"><b>sol:</b></span>{res.sol}</p>
                        <p><span className="me-2"><b>rover_id:</b></span>{res.rover.id}</p>
                        <p><span className="me-2"><b>rover_name:</b></span>{res.rover.name}</p>
                    </div>
                    <div className="card-footer">
                        <p className=""><b>Name:</b>{res.rover.cameras.map(data=>data.name)}</p>
                    </div>
                </div>   )
            }
            
        </div>
    )
}