import React from 'react'
import ChildComponent02 from './ChildComponent02'

export default function ChildComponent() {
  return (
    <div className='box1'>
      
      <h2>Child 01 Component</h2>
      {/* <p>Welcome user = {props.user}</p> */}
      {/* <ChildComponent02 user = {props.user}/> */}
      <ChildComponent02/>
    </div>
  )
}
