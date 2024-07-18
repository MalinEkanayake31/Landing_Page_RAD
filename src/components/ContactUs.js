import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactUs = () => {
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
    <Container>
      <Typography variant="h2" gutterBottom><br/>Contact Us<br/></Typography>
      <Typography variant="body1" gutterBottom>
        We'd love to hear from you! Whether you have questions, feedback, or just want to share your love for "Friends," feel free to get in touch with us.<br/>
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name ? formik.errors.name : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email ? formik.errors.email : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && !!formik.errors.message}
          helperText={formik.touched.message && formik.errors.message ? formik.errors.message : ''}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
      <Typography variant="body1" gutterBottom>
        <br/><b>Social Media</b><br/>
        Connect with us on social media for the latest updates, fan discussions, and more:<br/>
        <ul>
          <li>Instagram: @friendsfanhub</li>
          <li>Twitter: @friendsfanhub</li>
          <li>Facebook: Friends Fan Hub</li>
        </ul>
      </Typography>
    </Container>
  );
};

export default ContactUs;
