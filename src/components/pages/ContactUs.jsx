import React from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import BodyContent from '../BodyContent/BodyContent'
import UserProfile from '../useState/userProfile'

export default function ContactUs() {
  return (
    <>
    <div id="wrapper">
      <HeaderContent />
      <BodyContent>
        <h3>Contact Us Page</h3>
        <UserProfile/>
      </BodyContent>
      
    </div>
  
   </>
  )
}
