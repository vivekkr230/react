import {useState} from "react"

export function HideToggleComponent(){
    const [styleObj,setStyleObj]=useState({visibility:'hidden'})
    function handleToggleChange(e){
        if(e.target.checked){
            setStyleObj({
                visibility:"visible"
            })
        }
        else{
            setStyleObj({
                visibility:"hidden"
            })
        }
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>Product:</dt>
                <dd>iPhone 15</dd>
                <dt>preview <span className="form-switch"><input className="form-check-input" onChange={handleToggleChange} type="checkbox"/></span></dt>
                <dd style={styleObj}>
                    <img src="iphone15.jpg" alt="image not found"/>
                </dd>
            </dl>
        </div>
    )
}