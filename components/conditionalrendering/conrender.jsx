import {useState} from "react"

function ViewPort(props){
    return(
        <div className="container-fluid">
            <table className="table table-hover w-50">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><label></label></td>
                        <td><button>Save</button></td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}
function EditPort(props){

    return(
        <div className="container-fluid">
            
            <table className="table table-hover w-50">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" value={props.name}/></td>
                        <td><button>Edit</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}




export function ConditionalRender(props){
    const[view,setview]=useState(<ViewPort name="jhon"/>)
    
    function handleview(){
        setview(<ViewPort name="jhon"/>)
    }
    function handleedit(){
        setview(<EditPort name="jhon"/>)
    }
    return(
        <div className="container-fluid">
            <h2>Table Content<button className="bi bi-pen-fill" onClick={handleedit}></button><button onClick={handleview} className="bi bi-eye-fill"></button></h2>
            {view}
            
        </div>
    )
}
// import {useState} from "react"

// function ViewPort(props){
//     function showmessage(){
//         alert(`save clicked`)
//     }
//     return(
//         <div className="container-fluid">
//             <table className="table table-hover w-50">
//                 <tbody>
//                     <tr>
//                         <td>Name</td>
//                         <td><label></label></td>
//                         <td><button onClick={showmessage}>{props.buttonname}</button></td>
//                     </tr>
                    
//                 </tbody>
//             </table>
//         </div>
//     )
// }
// function EditPort(props){
//     function showedit(){
//         alert(`edit clicked`)
//     }
//     return(
//         <div className="container-fluid">
            
//             <table className="table table-hover w-50">
//                 <tbody>
//                     <tr>
//                         <td>Name</td>
//                         <td><input type="text" value={props.name}/></td>
//                         <td><button onClick={showedit}>{props.buttonname}</button></td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }


// export function ConditionalRender(props){
//         const[view,setview]=useState(<EditPort name="jhon" buttonname="edit"/>)
        
//         function handleview(){
//             setview(<ViewPort name="jhon"/>)
//         }
//         function handleedit(){
//             setview(<EditPort name="jhon" buttonname="edit"/>)
//         }
//         return(
//             <div className="container-fluid">
//                 <h2>Table Content</h2>
//                 {view}
                
//             </div>
//         )
//     }