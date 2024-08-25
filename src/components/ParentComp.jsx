import React from 'react'
import UserInfor from './UserInfor';

function ParentComp(props) {

    const userName = "Nipuna";
    const userEmail = "nipunayes@gmail.com"
    const userAge = 28;

  return (
    <div>
        <h1>Welcom to the user infor App</h1>

        <UserInfor name={userName} email={userEmail} age={userAge} />
        
    </div>
  )
}

export default ParentComp