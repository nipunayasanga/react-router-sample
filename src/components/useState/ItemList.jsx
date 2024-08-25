import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3','Item 4']);

  // Event handler function to handle button clicks
  const handleItemClick = (index) => {
    alert(`You clicked on ${items[index]}`);
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {/* Passing the index as an argument to the event handler */}
            <button className='butt' onClick={() => handleItemClick(index)}>Click Me</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
