import { DynamicGrid } from "./dynamic-grid"
import {useState,useEffect} from 'react'

export function RenderDynamicGrid(){
    const [viewname,setViewname]=useState('grid')
    const[pic,setpic]=useState([{"image":""}])
    useEffect(() => {
        fetch("mobile.json")
        .then(res=>res.json())
        .then(items=>{
            setpic(items)
        })
    }, [])
    function handleviewchange(e){
        setViewname(e.target.value)
    }
    return(
        <div className="container-fluid">
            
            <div className="mt-2 w-25">
                <label htmlFor="">Select View</label>
                <div>
                    <select onChange={handleviewchange} className="form-select">
                        <option value="choose one">Choose View</option>
                        <option value="grid">Grid</option>
                        <option value="card">Cards</option>
                    </select>
                </div>
            </div>
            <div className="mt-4">
                <DynamicGrid view={viewname} data={pic}/>
            </div>
        </div>
    )
}