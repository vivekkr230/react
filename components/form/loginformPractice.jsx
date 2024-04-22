import {useState} from 'react'

export function FormComponentPractice(){
    const[user,setUser]=useState({Name:'',Password:'',Number:0,Age:0})
    const[error,setError]=useState({Name:'',Password:'',Number:'',Age:''})
    function validateUserName(){
        alert('hello')
        if(user.Name===""){
            setError({
                Name:"Please Enter User Name",
                Password:error.Password,
                Number:error.Number,
                Age:error.Age
            })
        }
        else{
            setError({
                Name:"",
                Password:error.Password,
                Number:error.Number,
                Age:error.Age
            })
        }
        if(user.Password===''){
            setError({
                Name:error.Name,
                Password:"Please Enter User Name",
                Number:error.Number,
                Age:error.Age
            })
        }
        else{
            setError({
                Name:error.Name,
                Password:'',
                Number:error.Number,
                Age:error.Age
            })
        }
        if(isNaN(user.Number)){
            setError({
                Name:error.Name,
                Password:error.Password,
                Number:'Number must be in digit',
                Age:error.Age
            })
        }
        else{
            setError({
                Name:error.Name,
                Password:error.Password,
                Number:'',
                Age:error.Age
            })
        }
        if(isNaN(user.Age)){
            setError({
                Name:error.Name,
                Password:error.Password,
                Number:error.Number,
                Age:'Number must be in digit'
            })
        }
        else{
            setError({
                Name:error.Name,
                Password:error.Password,
                Number:error.Number,
                Age:''
            })
        }
    }
    function handleNameChange(e){
        setUser({
            Name:e.target.value,
            Password:user.Password,
            Number:user.Number,
            Age:user.Age
        })
    }
    function handlePasswordChange(e){
        setUser({
            Name:user.Name,
            Password:e.target.value,
            Number:user.Number,
            Age:user.Age
        })
    }
    function handleNumberChange(e){
        setUser({
            Name:user.Name,
            Password:user.Password,
            Number:e.target.value,
            Age:user.Age
        })
    }
    function handleAgeChange(e){
        setUser({
            Name:user.Name,
            Password:user.Password,
            Number:user.Number,
            Age:e.target.value
        })
    }
    function handleFormChange(e){
        e.preventDefault()
        validateUserName()
    }
    return(
        <div className="container-fluid m-3">
            <form action="" onSubmit={handleFormChange}>
                <h2>Login Details</h2>
                <dl>
                    <dt>Name:</dt>
                    <dd><input name="Name" type="text" onChange={handleNameChange}/></dd>
                    <dd className="text-danger">{error.Name}</dd>
                    <dt>Passsword</dt>
                    <dd><input name="Password" type="password" onChange={handlePasswordChange}/></dd>
                    <dd className="text-danger">{error.Password}</dd>
                    <dt>Number</dt>
                    <dd><input name="Number" type="number" onChange={handleNumberChange}/></dd>
                    <dd className="text-danger">{error.Number}</dd>
                    <dt>Age</dt>
                    <dd><input name="Age" type="number" onChange={handleAgeChange}/></dd>
                    <dd className="text-danger">{error.Age}</dd>
                </dl>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}