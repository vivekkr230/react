import { useState, useEffect } from "react"

export function MouseComponent() {
    const [photos, setphotos] = useState([{ "image": "" }])
    const [preview, setpreview] = useState()
    useEffect(() => {
        fetch("image.json")
            .then(res => res.json())
            .then(pic => {
                setphotos(pic)
            })
    }, [])
    function DisplayImage(e){
        setpreview(e.target.src)
    }
    return (
        <div className="container-fluid">
            <h1>iPhone 15</h1>
            <div className="row">
                <div className="col-2">
                    {
                        photos.map(mobile =>
                            <div className="border border-primary border-2 rounded rounded-2 mb-3">

                                <img src={mobile.image} alt="image not found" onMouseOver={DisplayImage} height="100" width="100" />

                            </div>)
                    }
                </div>
                <div className="col-10">

                </div>
            </div>
        </div>
    )
}