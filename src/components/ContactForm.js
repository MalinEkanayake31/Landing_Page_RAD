import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      const storedValue = JSON.parse(localStorage.getItem('formValues'));
      if (
        storedValue &&
        storedValue.name === values.name &&
        storedValue.email === values.email &&
        storedValue.message === values.message
      ) {
        setError('These values already exist in the system');
        setSuccess('');
      } else {
        localStorage.setItem('formValues', JSON.stringify(values));
        setError('');
        setSuccess('Form submitted successfully!');
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="container">
        <h1>Contact Form</h1>
        <label>
          Name:
          <input type="text" name="name" {...formik.getFieldProps('name')} />
        </label>
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}

        <br />
        <label>
          Email:
          <input type="email" name="email" {...formik.getFieldProps('email')} />
        </label>
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}

        <br />
        <label>
          Message:
          <input type="text" name="message" {...formik.getFieldProps('message')} />
        </label>
        {formik.touched.message && formik.errors.message ? (
          <div style={{ color: 'red' }}>{formik.errors.message}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </>
  );
};

export default ContactForm;
