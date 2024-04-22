
export function Navbar(props){
    return(
        <div className="d-flex justify-content-between bg-danger p-3">
            <div className="h2">
                {props.brandname}
            </div>
            <div>
                {
                    props.menubar.map(menu=>
                        <span className="me-2">{menu}</span>)
                }
            </div>
            <div>
                <span className="bi bi-person"></span>
                <span className="bi bi-heart"></span>
                <span className="bi bi-cart"></span>
            </div>
        </div>
    )
}