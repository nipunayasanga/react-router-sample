import React, { useContext } from 'react'
import { UserApp } from './AboutUs'

export default function ChildComponent03() {

    //UseContext Hook
    const user = useContext(UserApp)

  return (
    <div className='box3'>
      
      <h2>Child 03 Component</h2>
      <p>Welcome {user}</p>
    </div>
  )
}
