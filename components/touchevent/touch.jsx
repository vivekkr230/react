export function TouchComponent(){
    function formsubmit(e){
        e.preventDefault();
        alert(JSON.stringify({"name":"jhon","id":4}));
    }
    return(
        <div className="container-fluid">
            <form onSubmit={formsubmit}>
                <button>Submit</button>
            </form>
        </div>
    )
}