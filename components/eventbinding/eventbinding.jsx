export function EventBindingComponent(){
    return (
        <div className="container-fluid">
            <h1>hello</h1>
            {/* <button onClick={alert('hello jii')}>hello</button> it loads automatically */}
            {/* <button onClick={function(){alert('Hi');}}>ClickMe</button>
             */}
             <button onClick={()=>{alert('hi'); alert('welcome');}}>ClickMe</button>
        </div>
    )
}