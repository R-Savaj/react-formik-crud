import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { pantoneService } from '../../services/pantone.service';

function PantoneForm({ history, match }) {
    const { id } = match.params;
    const isAddMode = !id;
    const [user, setUser] = useState({
        name:'',
        year:'',
        pantone_value:''})
    
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        year: Yup.string()
            .required('Year is required')
            .min(4,'Minimum 4 digit required')
    });

    function onSubmit(fields) {
        if (isAddMode) {
            createUser(fields);
        } else {
            updateUser(id, fields);
        }
    }

    function createUser(fields) {
        pantoneService.create(fields)
            .then((res) => {
                history.push('.');
            })
            .catch(() => {
               console.log('error')
            });
    }

    function updateUser(id, fields, setSubmitting) {
        pantoneService.update(id, fields)
            .then(() => {
                history.push('..');
            })
            .catch(error => {
                console.log('error',error)
            });
    }

    useEffect(() => {
        if (!isAddMode) {
            pantoneService.getById(id).then(u => {
                setUser(u.data);
            });
        }
    }, []);

    return (
        <Formik initialValues={user} validationSchema={validationSchema} onSubmit={onSubmit} enableReinitialize>
            {({ errors, touched, isSubmitting, values }) => {
                return (
                    <Form>
                        <h1>{isAddMode ? 'Add Pantone' : 'Edit Pantone'}</h1>
                        <div className="form-row">
                            <div className="form-group col-5">
                                <label>Name</label>
                                <Field name="name" type="text" value={values.name} className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                                <ErrorMessage name="name" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group col-5">
                                <label>Year</label>
                                <Field name="year" type="text" className={'form-control' + (errors.year && touched.year ? ' is-invalid' : '')} />
                                <ErrorMessage name="year" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-7">
                                <label>pantone_value</label>
                                <Field name="pantone_value" type="text" className='form-control' />
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                Save
                            </button>
                            <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
                        </div>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PantoneForm;