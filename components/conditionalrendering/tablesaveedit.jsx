// import { useState,useEffect } from 'react'
// function ViewComponent(props){
//     return(
//         <div>
//             <label>{props.UserName}</label>
//         </div>
//     )
// }
// function EditComponent(props){
//     return(
//         <div>
//             <input type="text" value={props.UserName} />
//         </div>
//     )
// }

// export function RenderDemo(){
//     const[btntext,setBtnText]=useState('Edit')
//     const[userName,setUserName]=useState('jhon')
//     const[component,setComponent]=useState('')
//     useEffect(() => {
//        setComponent(<ViewComponent UserName={userName}/>) 
//     }, [])

//     function ToggleComponent(){
//         if(btntext==='Edit'){
//             setBtnText('Save')
//             setComponent(<EditComponent UserName={userName}/>)
//         }
//         else{
//             setBtnText("Edit")
//             setComponent(<ViewComponent UserName={userName}/>)
//         }
//     }
//     return(
//         <div className="container-fluid">
//             <h3>User Details</h3>
//             <table className="table table-hover w-50">
//                 <tbody>
//                     <tr>
//                         <td>Your Name</td>
//                         <td>{component}</td>
//                         <td>
//                             <button onClick={ToggleComponent} className="btn btn-success me-2">{btntext}</button>
//                             <button className="btn btn-danger">Cancel</button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }
import { useState,useEffect } from 'react'
function ViewComponent(props){
    return(
        <div>
            <label>{props.UserName}</label>
        </div>
    )
}
function EditComponent(props){
    return(
        <div>
            <input type="text" value={props.UserName} />
        </div>
    )
}

export function RenderDemo(){
    const[btntext,setBtnText]=useState('Edit')
    const[userName,setUserName]=useState('jhon')
    const[component,setComponent]=useState('')
    useEffect(() => {
       setComponent(<ViewComponent UserName={userName}/>) 
    }, [])

    function ToggleComponent(){
        if(btntext==='Edit'){
            setBtnText('Save')
            
        }
        else{
            setBtnText("Edit")
            
        }
    }
    function NameChange(e)
    {
        setUserName(e.target.value)
    }
    return(
        <div className="container-fluid">
            <h3>User Details</h3>
            <table className="table table-hover w-50">
                <tbody>
                    <tr>
                        <td>Your Name</td>
                        <td>
                            {
                                (btntext==='Edit')?<label onDoubleClick={ToggleComponent}>{userName}</label>:<input type="text" onChange={NameChange} value={userName}></input>
                            }
                        </td>
                        <td>
                            <button onClick={ToggleComponent} className="btn btn-success me-2">{btntext}</button>
                            <button className="btn btn-danger">Cancel</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
