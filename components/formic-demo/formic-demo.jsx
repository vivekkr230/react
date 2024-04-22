import {useFormik} from 'formik'

export function FormikDemo(){
    const formik=useFormik({
        initialValues:{
            Name:'',
            Password:'',
            Age:0,
            City:''
        },
        onSubmit:(values)=>{
            alert(JSON.stringify(values))
        }
    })
    return(
        <div className="container-fluid d-flex justify-content-center">
            <form action="" onSubmit={formik.handleSubmit}>
                <h3 className="text-warning">Login Details-formik hook</h3>
                <dl>
                    <dt>UserName:</dt>
                    <dd><input type="text" name="Name" id="" onChange={formik.handleChange} /></dd>
                    
                    <dt>Password:
                    </dt>
                    <dd><input type="password" name="Password" onChange={formik.handleChange}/></dd>
                    <dt>Age:</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                    
                    <dt>City:</dt>
                    <dd>
                        <select name="City" id="" className="form-select" onChange={formik.handleChange}>
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Patna">Patna</option>
                        </select>
                    </dd>
                    
                </dl>
                <button className="btn btn-danger" type="submit">Submit</button>
            </form>
        </div>
    )
}