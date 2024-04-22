
export function FormBindingComponent(){
    return(
        <div>
            <form  onSubmit={(e)=>{alert(`data submitted to api`); e.preventDefault()}}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="" id=""/></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}