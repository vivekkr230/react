import {useState,useRef} from 'react'
export function RefernceComponent(){
    const [msg, setmsg] = useState("")
    let m1 = useRef(null)
    let m2 = useRef(null)
    let m3 = useRef(null)
    function message1(){
        setmsg('Hi')
    }
    function message2(){
        setmsg('How Are You')
    }
    function message3(){
        setmsg('Welcome to React')
    }
    function handleStartClick(){
        console.log(`start button clicked`)
        m1.current=setTimeout(message1, 3000)
        m2.current=setTimeout(message2, 6000)
        m3.current=setTimeout(message3, 10000)
    }
    function handleCancleClick()
    {
        console.log(`cancel button clicked`)
        clearInterval(m2.current)
    }
    return (
        <div className="container-fluid">
            <div className="m-4">
                <button className="btn btn-primary rounded rounded-2 me-3" onClick={handleStartClick}>Start</button>
                
                <button className="btn btn-secondary rounded rounded-2" onClick={handleCancleClick}>Delete</button>
                <p className="text-center h4 mt-4">{msg}</p>
            </div>
        </div>
    )
}