import { useFormik } from 'formik'

export function FormikValidation(){
    function ValidateUser(FormCollection){
        var errors={}
        if(FormCollection.Name==""){
            errors.Name="UserName Required"
        }
        else{
            if(FormCollection.Name.length<4){
                errors.Name="Name must be greater than 4"
            }
            else{
                errors.Name=""
            }
        }
        if(FormCollection.Password==""){
            errors.Passsword="Password Required"
        }
        else{
            errors.Password=""
        }
        if(FormCollection.Age==''){
            errors.Age="Age is required"
        }
        else{
            if(isNaN(FormCollection.Age)){
                errors.Age="Age must be number"
            }
            else {
                errors.Age=''
            }
        }
        if(FormCollection.City=='-1'){
            errors.City="Please select the city"
        }
        else{
            errors.City=''
        }

        return errors
    }
    const formik=useFormik({
        initialValues:{
            Name:'',
            Password:'',
            Age:0,
            City:''
        },

        validate :ValidateUser,

        onSubmit:(values)=>{
            console.log(JSON.stringify(values))
        }
    })
    
    return(
        <div className="container-fluid d-flex justify-content-center">
            <form action="" onSubmit={formik.handleSubmit}>
                <h3 className="text-warning">Login Details-formik hook</h3>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name" id="" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Name}</dd>
                    <dt>Password
                    </dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" id="" className="form-select" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Patna">Patna</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button className="btn btn-danger" type="submit">Submit</button>
            </form>
        </div>
    )
}