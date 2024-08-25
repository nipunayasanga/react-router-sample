import React from 'react'
import MenuItem from '../MenuItem/MenuItem'

export default function Links() {

   

  return (

    
    
      <div className="links">
        <MenuItem linktext="Home" linkurl="/"/>
        <MenuItem linktext="Blog" linkurl="/blog"/>
        <MenuItem linktext="Products" linkurl="/product"/>
        <MenuItem linktext="React-Props" linkurl="/about"/>
        <MenuItem linktext="Contact us" linkurl="/contact"/>
        <MenuItem linktext="Login " linkurl="/login"/>
        
      </div>
    
  )
}
