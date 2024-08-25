import React, { useState } from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import BodyContent from '../BodyContent/BodyContent'


export default function UserLogin() {

  // State for storing form values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State for error messages
  const [errors, setErrors] = useState({});

  // Function to validate form inputs
  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    return errors;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // No validation errors, proceed with form submission
      alert('Form submitted successfully!');
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
    } else {
      // Set validation errors to state
      setErrors(validationErrors);
    }
  };
  return (
    <>
    <div id="wrapper">
      <HeaderContent />
      <BodyContent>
        <h2>User Login</h2>
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none' }}>
          Submit
        </button>
      </form>
    </div>
        
      </BodyContent>
      
    </div>
  
   </>
  )
}

