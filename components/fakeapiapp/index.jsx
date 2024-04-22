import { useState, useEffect } from "react"


export function FakeApiAppComponent() {
    const [product, setProduct] = useState([{ "id": 0, "title": "", "price": 0, "description": "", "category": "", "image": "", "rating": { "rate": 0, "count": 0 } }])
    const [category, setCategory] = useState([])
    const [cartItem, setCartItem] = useState([])
    const [count, setCount] = useState(0)
    function loadCategory() {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(categories => {
                categories.unshift("ALL")
                setCategory(categories)
            })
    }
    function loadProduct(url) {
        fetch(url)
            .then(res => res.json())
            .then(products => {
                setProduct(products)
            })
    }
    useEffect(() => {
        loadCategory()
        loadProduct("https://fakestoreapi.com/products")
    }, [])
    function handleCategoryChange(e) {
        if (e.target.value === "ALL") {
            loadProduct("https://fakestoreapi.com/products")
        } else {
            loadProduct(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }

    }
    function handleButtonClick(e) {
        fetch(`https://fakestoreapi.com/products/${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                cartItem.push(data)
                setCount(cartItem.length)
            })
            
    }
    return (
        <div>
            <header className="d-flex justify-content-between m-2 p-2">
                <div>
                    <h2>Shooper.</h2>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Jewellery</span>
                    <span className="me-3">Men's Fashion</span>
                    <span className="me-3">Women's Fashion</span>
                </div>
                <div>
                    <button className="btn btn-light position-relative">
                        <span className="bi bi-cart"></span>Add to Cart
                        <span className="badge rounded-circle bg-danger position-absolute"></span>
                    </button>
                </div>
            </header>
            <section className="row mt-4">
                <nav className="col-3">
                    <label className="form-label fw-bold">Select Categories</label>
                    <select name="" id="" className="form-select m-1" onChange={handleCategoryChange}>
                        {
                            category.map(c_name =>
                                <option key={c_name} value={c_name}>{c_name.toUpperCase()}</option>)
                        }
                    </select>
                </nav>
                <main className="col-7">

                    <div className="d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                        {
                            product.map(allproducts =>

                                <div className="card d-flex m-2" style={{ "width": "200px" }}>
                                    <img src={allproducts.image} className="card-img-top" height="140px" alt="image not found" />
                                    <div className="card-header overflow-auto" style={{ "height": "140px" }}>
                                        {allproducts.title}
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{(allproducts.price).toLocaleString('en-IN', { style: 'currency', currency: "INR" })}</dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-danger w-100" value={allproducts.id} onClick={handleButtonClick}>
                                            <span className="bi bi-cart">Add to cart</span>
                                        </button>
                                    </div>
                                </div>

                            )
                        }
                    </div>



                </main>
                <aside className="col-2">
                        <table className="table table-hover caption-top">
                            <caption>You cart item</caption>
                            <thead>
                                <tr>
                                    <th>item</th>
                                    <th>preview</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItem.map(tabledata=>
                                    {
                                        <tr>
                                            <td>{tabledata.id}</td>
                                            <td><img ></img></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                </aside>
            </section>
        </div>
    )
}