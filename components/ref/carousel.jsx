import {useState,useRef,useEffect} from 'react'

export function CarouselComponent(){
    const [product, setproduct] = useState({})
    const [status,setstatus]=useState('')
    const slideshow=useRef(null)
    let productId=useRef(0)
    function loadProduct(){
        productId.current=productId.current+1;
        fetch(`http://fakestoreapi.com/products/${productId.current}`)
        .then(res=>res.json())
        .then(item=>{
            setproduct(item)
        })
    }
    useEffect(() => {
        loadProduct()
    }, [])
    function handlePreviousClick(){
        productId.current=productId.current-1;
        loadProduct();
    }
    function handleNextClick(){
        productId.current=productId.current+1;
        loadProduct();
    }
    function handleImageChange(){
        productId.current=productId.current+1;
        fetch(`http://fakestoreapi.com/products/${productId.current}`)
        .then(res=>res.json())
        .then(item=>{
            setproduct(item)
        })
    }
    function handlePlayClick(){
        setstatus('slide show started')
        slideshow.current=setTimeout(handleImageChange,5000)
    }
    function handlePauseClick(){
        setstatus('slide show paused')
        clearInterval(slideshow.current)
    }
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-3 w-50">
                <div className="card-header text-center">
                    <span>{product.title}</span>
                    <div className="text-danger text-center">[{status}]</div>
                </div>
                <div className="card-body text-center row">
                    <div className="col-1">
                        <button onClick={handlePreviousClick} className="btn btn-success">&lt;</button>
                    </div>
                    <div className="col-10">
                        <img src={product.image} alt="" width="100%" height="300px" />
                    </div>
                    
                    <div className="col-1">
                        <button onClick={handleNextClick}  className="btn btn-success">&gt;</button>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-outline-success me-2" onClick={handlePlayClick}>
                        <span className="bi bi-play"></span>
                    </button>
                    <button className="btn btn-outline-danger " onClick={handlePauseClick}>
                        <span className="bi bi-pause"></span>
                    </button>
                </div>
            </div>
        </div>
    )
}