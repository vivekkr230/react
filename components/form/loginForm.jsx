
import {useState} from "react"

export function LoginForm(){
    const [user, setuser] = useState({Name:'',Password:'',Age:0,City:''})
    const [error,seterror]=useState({Name:'',Password:'',Age:'',City:''})

    function ValidateUserName(){
        if(user.Name===""){
            seterror({
                Name:'Name Required',
                Password:error.Passsword,
                Age:error.Age,
                City:error.City
            })
        }else{
            seterror({
                Name:'',
                Password:error.Passsword,
                Age:error.Age,
                City:error.City
            })
        }
        if(isNaN(user.Age)){
            seterror({
                Name:error.Name,
                Password:error.Passsword,
                Age:'Age must be a number',
                City:error.City
            })
        }else{
            seterror({
                Name:error.Name,
                Password:error.Passsword,
                Age:'',
                City:error.City
            })
        }
    }
    function handleNameChange(e){
        setuser({
            Name:e.target.value,
            Password:user.Password,
            Age:user.Age,
            City:user.City
        })  
    }
    function handlePasswordChange(e){
        setuser({
            Name:user.Name,
            Password:e.target.value,
            Age:user.Age,
            City:user.City
        })  
    }
    function handleAgeChange(e){
        setuser({
            Name:e.target.value,
            Password:user.Password,
            Age:e.target.value,
            City:user.City
        })  
    }
    function handleCityChange(e){
        setuser({
            Name:e.target.value,
            Password:user.Password,
            Age:user.Age,
            City:e.target.value
        })
        if(e.target.value==-1){
            seterror({
                Name:error.Name,
                Password:error.Passsword,
                Age:error.Age,
                City:"Please Select City"
            })
        } else{
            seterror({
                Name:error.Name,
                Password:error.Passsword,
                Age:error.Age,
                City:''
            })
        } 
    }
    function handleFormChange(e){
        e.preventDefault()
        ValidateUserName()
    }
    function handleNameKeyUp(){
        ValidateUserName()
    }
    function handleNameBlur(){
        ValidateUserName()
    }
    return(
        <div className="container-fluid d-flex justify-content-center">
            <form action="" onSubmit={handleFormChange}>
                <h3>Login Details</h3>
                <dl>
                    <dt>UserName:</dt>
                    <dd><input type="text" name="" id="" onKeyUp={handleNameKeyUp} onBlur={handleNameBlur} onChange={handleNameChange}/></dd>
                    <dd className="text-danger">{error.Name}</dd>
                    <dt>Password:
                    </dt>
                    <dd><input type="password" onChange={handlePasswordChange}/></dd>
                    <dt>Age:</dt>
                    <dd><input type="text" onChange={handleAgeChange}/></dd>
                    <dd className="text-danger">{error.Age}</dd>
                    <dt>City:</dt>
                    <dd>
                        <select name="" id="" className="form-select" onChange={handleCityChange}>
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Patna">Patna</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{error.City}</dd>
                </dl>
                <button className="btn btn-danger">Submit</button>
            </form>
        </div>
    )
}