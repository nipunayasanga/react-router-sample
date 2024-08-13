import React from 'react'
import ChildComponent03 from './ChildComponent03'

export default function ChildComponent02() {
  return (
    <div className='box2'>
      
      <h2>Child 02 Component</h2>

    {/* Using Props  */}

      {/* <p>Welcome {props.user}</p> */}

      {/* <ChildComponent03 user = {props.user}/> */}

      <ChildComponent03/>
    </div>
  )
}
