import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({
    firstName: 'John ',
    lastName:'Doe',
    age: 25,
    email: 'john.doe@example.com'
  });

  const updateEmail = () => {
    setUser(prevState => ({
      ...prevState, // Spread operator to retain previous state properties
      email: 'nipuna@gmial.com' // Update the email property
    }));
  };


  const updateFirstName = () => {
    setUser(prevState => ({
        ...prevState,
        firstName: 'Nipuna'
    }))
  }


  const updateLastName = () => {setUser(prevState => ({...prevState,lastName:"Yasanga" }));// Spread operator to retain previous state propertieslastName: 'Yasanga' // Update the email propert
  };


  const updateAge = () => {setUser(prevState => ({...prevState,age:28}))}

  return (
    <div>
      <h1>User Profile</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <span>
      <button className='btn' onClick={updateFirstName}>Update First Name</button>
      <button className='btn' onClick={updateLastName}>Update Last Name</button>
      <button className='btn' onClick={updateAge}>Update Age</button>
      <button className='btn' onClick={updateEmail}>Update Email</button>
      
      </span>
      
    </div>
  );
}

export default UserProfile;
