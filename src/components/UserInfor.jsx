import React from 'react'

export default function UserInfor(props) {




  return (
    <div>
        <h2>User Information</h2>
        <p>Name : {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Age  : {props.age}</p>
    </div>
  )
}
