import React, { useState } from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import BodyContent from '../BodyContent/BodyContent'

export default function AboutUs() {

  const [username, setUserName] = useState("Guest");


  return (
    
      <>
      <div id="wrapper">
        <HeaderContent />
        <BodyContent>
          <h3>About Us Page</h3>
          <p1>About Us Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eaque quas adipisci quia debitis? Harum quibusdam, hic ipsum sunt cumque tenetur 
            quisquam aperiam sapiente aut placeat magni provident nam totam voluptatem?</p1>
        </BodyContent>
        
      </div>
    
      <h2>Parent</h2>

      <p>Welcome {username}</p>

      <input type="text" placeholder='Enter Your Username' onChange={(e) => {setUserName(e.target.value)}} />

     </>
      
    
  )
}
