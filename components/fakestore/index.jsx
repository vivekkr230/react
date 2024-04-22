import {useState,useEffect} from "react"

export function FakeStoreComponent() {

    const [data, setdata] = useState([])

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(result => result.json())
            .then(output =>
                setdata(output))
    }, [])
    return (
        <div className="d-flex flex-wrap">
            {
                data.map(res =>
                    <div className="card w-25 m-2">
                        <div className="card-header">
                            <img src={res.image} alt="image not found" height="250" width="200" className="w-100" />
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-4">
                                    <p><b>id:</b></p>
                                    <p><b>price:</b></p>
                                    <p><b>category:</b></p>
                                    <p><b>rating:</b></p>
                                </div>
                                <div className="col-8">
                                    <p>{res.id}</p>
                                    <p>&#8377;{res.price}</p>
                                    <p>{res.category}</p>
                                    <span><b>Rate:</b>{res.rating.rate}</span><span><b>Review:</b>{res.rating.count}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <p><b>{res.description}</b></p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}