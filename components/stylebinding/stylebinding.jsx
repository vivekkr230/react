import {useState, useEffect} from "react"

export function StyleBindingComponent(){
    const [styleObject, setstyleObject] = useState({border:"",boxShadow:""})
    function handleChange(e){
        if(e.target.value==""){
            setstyleObject({
                border:'2px double red',
                boxShadow:'2px 2px 2px red'
            })
        }
        else{
            setstyleObject({
                border:'2px double green',
                boxShadow:'12px 12px 12px green'
            })
        }
    }
    useEffect(() => {
        setstyleObject({
            border:'2px double green',
            boxShadow:'12px 12px 12px yellow'
        })
        
    }, [])
    return(
        <div className="container-fluid">
            <dl>
                <dt>Username:</dt>
                <dd><input type="text" placeholder="userName" style={styleObject} onChange={handleChange}></input></dd>
            </dl>
        </div>
    )
}