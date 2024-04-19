import React, { useState } from 'react';
import { men, women, household, shoes, kids } from './Arraydet';
import './App.css';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleDoubleClick = (item) => {
    const isItemExists = selectedItems.some(selectedItem => selectedItem.details === item.details);
    if (isItemExists) {
      alert('This item is already added.');
      return;
    }
    setSelectedItems(prevSelectedItems => [...prevSelectedItems, { ...item, quantity: 1 }]);
  };

  const handleQuantityChange = (id, action) => {
    setSelectedItems(prevSelectedItems => {
      const updatedSelectedItems = prevSelectedItems.map(item => {
        if (item.id === id) {
          if (action === 'increment') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'decrement' && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
      return updatedSelectedItems;
    });
  };

  const handleRemoveItem = (details) => {
    setSelectedItems(prevSelectedItems => prevSelectedItems.filter(item => item.details !== details));
  };
  const totalQuantity = selectedItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <div id='garment'>
    <div id='garment0'>
      <div id='row3'>
        <button id='searchbtn'>
          <img id='searchimg' src="./src/assets/images/search (1).png" alt="Search" height='30px' />
        </button>
        <input id='input1' type="text" placeholder='Search garment to add' />
      </div>
      <hr />
      {selectedItems.length > 0 && ( // Conditionally render the Selected section
        <div id='selected'>
          <h1>Selected</h1>
          <div id='selected1'>
            {/* Display selected items with quantity controls and remove button */}
            {selectedItems.map(item => (
              <div id='selectedbox' key={item.id}>
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.details}</p>
                  <button id='incr' onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
                  <span><input  id='inp1' type="text" value={item.quantity} /></span>
                  <button id='decr' onClick={() => handleQuantityChange(item.id, 'increment')}>+</button><br /><br />
                  <button id='remove' onClick={() => handleRemoveItem(item.details)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <hr />
    </div>
      <div id='garment1'>
      <div id='allprod-container'>
      <div id='scrollbar'>
      <div id='allprod'>
        <div id='prod'>
        <div id='menprod'>
          <div>
            <h2>MEN</h2>
          </div><hr />
           <div id='proddiv'>
             {/* Displaying details from men array */}
             {men.map(item => (
            <div id='itembox' key={item.id} onDoubleClick={() => handleDoubleClick(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.details}</p>
            </div>
          ))}
           </div>
        </div>
          <div id='womendiv'>
           <div>
            <h2>Women</h2>
           </div><hr />
         <div id='proddiv'>
           {/* Displaying details from women array */}
         {women.map(item => (
            <div id='itembox' key={item.id} onDoubleClick={() => handleDoubleClick(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.details}</p>
            </div>
          ))}
         </div>
          </div>
          <div id='kidsdiv'>
            <div>
              <h2>KIDS</h2>
            </div><hr />
           <div id='proddiv'>
             {/* Displaying details from kids array */}
          {kids.map(item => (
            <div id='itembox' key={item.id} onDoubleClick={() => handleDoubleClick(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.details}</p>
            </div>
          ))}
           </div>
          </div>
         <div id='shoesdiv'>
          <div>
            <h2>SHOES</h2>
          </div><hr />
           <div id='proddiv'>
            {/* Displaying details from shoes array */}
           {shoes.map(item => (
            <div id='itembox' key={item.id} onDoubleClick={() => handleDoubleClick(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.details}</p>
            </div>
          ))}
           </div>
         </div>
        <div id='householddiv'>
          <div>
            <h2>HOUSEHOLD</h2>
          </div><hr />
          <div id='proddiv'>
              {/* Displaying details from household array */}
              {household.map(item => (
            <div id='itembox' key={item.id} onDoubleClick={() => handleDoubleClick(item)}>
              <img src={item.image} alt={item.name} />
              <p>{item.details}</p>
            </div>
          ))}
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      <div id='qty'>
     <div >
      <h3>Quantity</h3>
     <button id='incr'>+</button>
      <input id='inp' type="text"  />
      <button id='decr'>-</button><br />
          <br /><br /><br /><br /><br /><div id='qty2'>
          <span id='selgar'><input id='inp' type="text" value={totalQuantity} readOnly /> garments selected</span> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <div>
         <button id='continue'>continue</button><br /><br />
          <button id='cancel'>cancel</button>
         </div>
          </div>
        
     </div>
      </div>
      </div>
    </div>
  );
}

export default App;
