import {useState,useEffect} from "react"

export function ClockBinding(){
    const [clock, setclock] = useState(Date())
    const [msg,setmsg]= useState('')
    const [preview,setpreview]=useState([{"picture":""}]);
    function handleclock(){
        var d=new Date()
        setclock(d.toLocaleTimeString());
    }
    useEffect(() => {
        setInterval(handleclock,1000)
        var date=new Date()
        var hrs=date.getHours()
        if(hrs>=0 && hrs<=12){
            setmsg('Good Morning')
        }
        else if(hrs>=12 && hrs<16){
            setmsg('Good Afternoon')
        }
        else if(hrs>=16 && hrs<18){
            setmsg('Good Evening')
        }
        else if(hrs>=18 && hrs<23){
            setmsg('Good Night')
        }
        fetch("/Users/vivekkumar/react-practice/public/greeting.json")
        .then(res=>res.json())
        .then(photos=>{
            setpreview(photos)
        })
    }, [])
    return(
        <div className="container-fluid d-flex justify-content-center">
            <div>
                {
                    preview.map(photo=>
                        <img src={photo}></img>)
                }
            </div>
            <h2>{clock}
            <br></br><span><img src="" alt="image not found" height="50" width="50" /></span>
            {msg}</h2>
        </div>
    )
}