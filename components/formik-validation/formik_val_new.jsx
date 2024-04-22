import { useFormik } from 'formik';
import * as yup from 'yup';
export function FormikValidationNew(){
    // function ValidationCity(FormCollection){
    //     var errors={}
    //     if(FormCollection.City=='-1'){
    //         errors.City="Please Select The City"
    //     }
    //     else{
    //         errors.City=''
    //     }
    //     return errors
    // }
    const formik=useFormik({
        initialValues:{
            Name:'',
            Password:'',
            Age:0,
            City:''
        },

        validationSchema:yup.object({
            Name:yup.string().required('Name Required').min(4,'less than 4 letter'),
            Password:yup.string().required('Password Required'),
            Age:yup.number().required('Age must be a digit')
        }),
        // validate:ValidationCity
        // ,
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })
    
    return(
        <div className="container-fluid d-flex justify-content-center">
            <form action="" onSubmit={formik.handleSubmit}>
                <h3 className="text-danger">Login Details-formik Yup Method</h3>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name" id="" {...formik.getFieldProps("Name")} /></dd>
                    <dd className="text-danger">{formik.errors.Name}</dd>
                    <dt>Password</dt>
                    <dd><input type="text" name="Password" {...formik.getFieldProps("Password")}/></dd>
                    <dd className="text-danger">{formik.errors.Password}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" {...formik.getFieldProps("Age")}/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" id="" className="form-select" {...formik.getFieldProps("City")}>
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