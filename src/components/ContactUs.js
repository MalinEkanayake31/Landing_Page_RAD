import React, { useState } from 'react';
import { Typography, Container, TextField, Button } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = (name, value) => {
    const newErrors = {};
    if (name === 'name' && !value) newErrors.name = 'Name is required';
    if (name === 'email' && !value) newErrors.email = 'Email is required';
    else if (name === 'email' && value && !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) newErrors.email = 'Email is not valid';
    if (name === 'message' && !value) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const newErrors = validate(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validate('name', formData.name) || validate('email', formData.email) || validate('message', formData.message);
    if (Object.keys(newErrors).length === 0) {
      setSuccess('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(newErrors);
      setSuccess('');
    }
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom><br/>Contact Us<br/></Typography>
      <Typography variant="body1" gutterBottom>We'd love to hear from you! Whether you have questions, feedback, or just want to share your love for "Friends," feel free to get in touch with us.<br/></Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">Submit</Button>
        {success && <p>{success}</p>}
      </form>

      <Typography variant="body1" gutterBottom><br/><b>Social Media</b><br/>
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
