import {useReducer} from 'react'
var initialState={lcount:0,dcount:0}

function reducer(state,action){
    switch(action.type){
        case 'like':
            return {lcount:state.lcount+1}
        case 'dislike':
            return {dcount:state.dcount+1}
    }
}



export function LikeDislikeCount(){
    const [state, dispatch] = useReducer(reducer, initialState)
    function handleLikeCount(){
        dispatch({type:'like'})
    }
    function handleDislikeCount(){
        // console.log(`${state.dcount}`)
        dispatch({type:'dislike'})
    }
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'200px'}}>
                <button onClick={handleLikeCount} className="btn btn-success me-3"><span className="bi bi-hand-thumbs-up"></span>Like</button>
                <button onClick={handleDislikeCount}className="btn btn-danger"><span className="bi bi-hand-thumbs-down"></span>DisLike</button>
                
            </div>
            <div className="d-flex justify-content-center align-items-center" style={{height:'200px'}}>
                <span className="me-4"><label htmlFor="">likeCount:{state.lcount}</label></span>
                <span><label htmlFor="">DislikeCount:{state.dcount}</label></span>
            </div>
        </div>
    )
}