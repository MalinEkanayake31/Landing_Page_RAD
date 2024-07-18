import React, { useState, useEffect } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = (name, value) => {
    const newErrors = {};
    if (name === 'name' && !value) newErrors.name = 'Name is required';
    if (name === 'email' && !value) newErrors.email = 'Email is required';
    else if (name === 'email' && value && !/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Email is invalid';
    if (name === 'message' && !value) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    const newErrors = validate(name, value);
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      console.log('Validation errors:', errors);
    }
  }, [errors]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
      {success && <p>{success}</p>}
    </form>
  );
};

export default ContactForm;
