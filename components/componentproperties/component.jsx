import {Navbar} from '../componentproperties/navbar'
import {TableGrid} from '../componentproperties/tablegrid'
import {useState,useEffect} from "react"
export function ComponentProp(){
    const[columns,setcolumns]=useState([])
    const[rows,setrows]=useState([])
    function loadcolumn(){
        fetch("http://fakestoreapi.com/products/1")
        .then(res=>res.json())
        .then(product=>{
            
            setcolumns(Object.keys(product))
        })
    }
    function loadrows(){
        fetch("http://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(product=>{
            product.map(data=>
                delete data.rating)
            setrows(product)
        })
    }
    useEffect(() => {
        loadcolumn()
        loadrows()
    }, [])
    return(
        <div>
            <h2>Component Properties</h2>
            <TableGrid caption="Products" theme="table-primary" fields={["Id","Name","Price"]} data={[{"Id":1,"Name":"SamsungTV","Price":10000},{"Id":2,"Name":"MacBook Air","Price":50000}]} />
            <h2>FakeStoreApi</h2>
            <TableGrid caption="fakestoreapi" theme="table-success" fields={columns} data={rows} />
        </div>
    )
}