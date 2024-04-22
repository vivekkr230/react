import { ErrorMessage, Field,Form,Formik } from 'formik'
import * as yup from 'yup'


export function YupComponent(){
    return(
        <div className="container-fluid">
            <Formik 
                initialValues={
                    {
                        Name:'',
                        Password:'',
                        Age:0,
                        City:''
                    }
                }
                validationSchema={
                    yup.object({
                        Name:yup.string().required('Name Required').min(4,'less than 4 letter'),
                        Password:yup.string().required('Password Required'),
                        Age:yup.number().required('Age must be a digit')
                    })
                }
                onSubmit={(values)=>{
                    alert(JSON.stringify(values))
                }}
            >
                <Form>
                    <dl>
                        <dt>Name:</dt>
                        <dd>
                            <Field type="text" name="Name" />
                        </dd>
                        <dd>
                            <ErrorMessage name="Name" />
                        </dd>
                        <dt>Password</dt>
                        <dd>
                            <Field type="password" name="Password"/>
                        </dd>
                        <dd>
                            <ErrorMessage name="Password"/>
                        </dd>
                        <dt>Age</dt>
                        <dd>
                            <Field type="number" name="Age"/>
                        </dd>
                        <dd>
                            <ErrorMessage name="Age"/>
                        </dd>
                        <dt>City</dt>
                        <dd>
                            <Field as="select" className="form-select w-25">
                                <option value="-1">Select City</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Kota">Kota</option>
                            </Field>
                            
                        </dd>
                    </dl>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Form>

            </Formik>
        </div>
    )
}