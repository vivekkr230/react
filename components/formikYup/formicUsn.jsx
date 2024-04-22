import * as yup from 'yup'
import { ErrorMessage, Field, Form, Formik } from 'formik'
export function StudentDetail() {
    return (
        <div className="container-fluid">
            <h1 className="text-capitalize text-danger">Students Details</h1>
            <Formik
                initialValues={
                    {
                        Name: '',
                        USN: '',
                        Branch: '',
                        Sem: ''
                    }
                }
                validationSchema={
                    yup.object({
                        Name: yup.string().required('Enter Student Name'),
                        USN: yup.string().required('Enter Students USN Name'),
                        Branch: yup.string().required('Enter Students Branch Name'),
                        Sem: yup.string().required('Enter Students Sem')
                    })
                }
                onSubmit={(values) => {
                    alert(JSON.stringify(values))
                }}
            >
                {
                    props => <Form>
                        <dl>
                            <dt>Name:</dt>
                            <dd>
                                <Field type="text" name="Name" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Name" />
                            </dd>
                            <dt>USN:</dt>
                            <dd>
                                <Field type="text" name="USN" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="USN" />
                            </dd>
                            <dt>Branch:</dt>
                            <dd>
                                <Field type="text" name="Branch" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Branch" />
                            </dd>
                            <dt>Sem:</dt>
                            <dd>
                                <Field type="text" name="Sem" />
                            </dd>
                            <dd className="text-danger">
                                <ErrorMessage name="Sem" />
                            </dd>
                        </dl>
                        <button className="btn btn-danger" disabled={(props.isValid)?false:true} type="submit">Submit</button>
                        <button className="btn btn-secondary ms-3" disabled={(props.dirty)?false:true} type="submit">Save</button>
                        
                    </Form>
                }


            </Formik>

        </div>
    )
}