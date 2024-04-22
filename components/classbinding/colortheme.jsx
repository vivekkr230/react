import {useState} from "react"
import './colortheme.css'
export function ColorTheme(){
    const [theme,setTheme]=useState('light-theme')
    const [btnColor,setBtnColor]=useState('btn btn-dark w-100')
    function handleChange(w){
        if(w.target.checked){
            setTheme('dark-theme')
            setBtnColor('btn btn-light w-100')
        }
        else{
            setTheme('light-theme')
            setBtnColor('btn btn-dark w-100')
        }
    }
    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <form className={theme}>
                    <span className="form-switch"><input type="checkbox" onChange={handleChange} className="form-check-input"/></span>
                    <dl>
                        <dt>Username</dt>
                        <dd><input type="text" name="" id=""/></dd>
                        <dt>Password</dt>
                        <dd><input type="password"/></dd>
                    </dl>
                    <button className={btnColor}>Submit</button>
                </form>
            </div>
        </div>
    )
}