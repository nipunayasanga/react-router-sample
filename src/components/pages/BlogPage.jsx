import React from 'react'
import HeaderContent from '../HeaderContent/HeaderContent'
import BodyContent from '../BodyContent/BodyContent'
import ItemList from '../useState/ItemList'

export default function BlogPage() {

  let items = ['item1', 'item2','item3','item4','item5']

  return (
    
    <>
      <div id="wrapper">
        <HeaderContent />
        <BodyContent>
          <h3>Blog Page</h3>
          <p>Blog Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, cumque autem! Quisquam tempora, tenetur molestiae eum enim, impedit rerum ducimus hic, odio libero voluptatibus iste harum repudiandae! Asperiores, ad neque!</p>

        </BodyContent>
        <p style= {{color: 'darkgray', fontWeight: 'bold' , paddingTop: '6px'}}>Array Map() Function</p>

        <ul>
          
         {items.map((item) => {
          return(
            <li>{item}</li>
          )
          
         })}

        </ul>
        
        <ItemList/>
      </div>
    
    </>
      
  
  )
}
