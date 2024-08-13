import React, { createContext, useState } from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import BodyContent from '../BodyContent/BodyContent'
import ChildComponent01 from './ChildComponent01';

// UseContext Hook 
export const UserApp = createContext()

export default function AboutUs() {

  const [username, setUserName] = useState("Guest");


  return (
    
      <>
      
      <UserApp.Provider value={username}>

      <div id="wrapper">
        <HeaderContent />
        <BodyContent>
          <h2>Props Drilling and CreateContex / UseContext HOOK</h2>
          <p>Props Drilling refers to the process of passing data from a parent component down through multiple layers of 
            nested child components. This often leads to cumbersome and repetitive code, especially when the data needs to be 
            accessed by deeply nested components.</p>
          <p><h3><b>createContext: </b></h3>This function creates a Context object, which can hold data that you want to share across multiple components without 
            passing props manually through every level.</p>
            <p><h3><b>useContext: </b></h3>This hook allows components to access the data from the Context object created by createContext. 
              Instead of passing props down through every component, you can directly access the context in any component that needs it, 
              simplifying the data flow and avoiding props drilling.</p>

        </BodyContent>
        
 
      <h2>Parent</h2>

      <p>Welcome {username === " "  ? "Guest" : username}</p>

      <input type="text" placeholder='Enter Your Username' onChange={(e) => {setUserName(e.target.value)}} />

      {/* Nested Components */}
      <ChildComponent01 />

    </div>
      </UserApp.Provider>
      
     </>
      
    
  )
}
