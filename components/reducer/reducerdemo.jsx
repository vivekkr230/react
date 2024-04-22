import {useReducer} from 'react'
 
var intialState={count : 0}

function reducer(state,action){
    switch(action.type){
        case "join" :
            return {count : state.count+1}
        case "exit":
            return {count : state.count-1}
    }
}




export function ReducerDemo(){
    const [state, dispatch] = useReducer(reducer, intialState)
    function handleJoinClick(){
        dispatch({type:'join'});
    }
    function handleExitClick(){
        dispatch({type:'exit'})
    }
    return(
        <div className="container-fluid">
            <h2>Naresh IT- Youtube</h2>
            <div className="mt-4 mb-4">
                <button onClick={handleJoinClick} className="btn btn-success me-2"><span className="bi bi-youtube me-2"></span>watch</button>
                <button onClick={handleExitClick} className="btn btn-danger"><span className="bi bi-door-closed me-2"></span>exit</button>
            </div>
            <div>
                <iframe src="https://www.youtube.com/embed/licAps-qaXE?si=GZIlhRq9WDN8NkE4" frameborder="0" height="400" width="600"></iframe>
            </div>
            <div className="mt-4">
                <div>
                    Live Viwers:{state.count}
                </div>
            </div>
        </div>
    )
}