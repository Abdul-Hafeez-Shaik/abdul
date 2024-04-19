import React,{useState} from 'react'
import './App.css'
import {items,items1,items2,items3,items4,items5,items6,items7,items8,items9} from './Arraydet'
import Header from './components/Header'
import AddToOrderModal from './components/AddToOrderModal'
import PopupForm from './components/PopupForm'
import './components/PopopForm.css'
const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  // Function to handle button click and update selected items
  const handleItemClick = (itemIds) => {
    const selectedItems = items.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick1 = (itemIds) => {
    const selectedItems = items1.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick2 = (itemIds) => {
    const selectedItems = items2.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick3 = (itemIds) => {
    const selectedItems = items3.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick4 = (itemIds) => {
    const selectedItems = items4.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick5 = (itemIds) => {
    const selectedItems = items5.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick6 = (itemIds) => {
    const selectedItems = items6.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick7 = (itemIds) => {
    const selectedItems = items7.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick8 = (itemIds) => {
    const selectedItems = items8.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  const handleItemClick9 = (itemIds) => {
    const selectedItems = items9.filter(item => itemIds.includes(item.id));
    setSelectedItems(selectedItems);
    setActiveButton(itemIds[0]); // Set the first item ID as the active button
  };
  // Add similar handlers for other item categories

  const addToOrder = () => {
    setShowModal(true);
  };
  const handleAddToOrder = (selectedProductIds) => {
    const selectedProducts = selectedItems.filter(item => selectedProductIds.includes(item.id));
    setOrderedItems(prevItems => [...prevItems, ...selectedProducts]);
    setShowModal(false);
  };
  const removeFromCart = (productId) => {
    setOrderedItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  return (
    <div>
      <Header 
      handleItemClick={handleItemClick} 
      handleItemClick1={handleItemClick1}
      handleItemClick2={handleItemClick2}
      handleItemClick3={handleItemClick3}
      handleItemClick4={handleItemClick4}
      handleItemClick5={handleItemClick5} 
      handleItemClick6={handleItemClick6}
      handleItemClick7={handleItemClick7}
      handleItemClick8={handleItemClick8}
      handleItemClick9={handleItemClick9}
      handlePopupOpen={handlePopupOpen}
      activeButton={activeButton} />
      
      <div id='productpage'>
        <div id='products'>
        {isPopupOpen && <PopupForm handleClose={handleClosePopup} />}
          {selectedItems.map(item => (
            <button id='btn11'> <div  style={{backgroundImage:`url(${item.image})`,width:`${130}px`,height:`${125}px`}} className='item' id='item' key={item.id}>
              <button style={{color:`white`}}>{item.name}</button>
              <p id='itemdet'></p>
            </div>
            <div><p id='itemdet'>{item.details}</p></div></button>
          ))}
        </div>
        <div id='quantity'>
          <div id='mainbtn'>
            <button id='subbbtn1'>➖</button>
            <button id='subbbtn'>1</button>
            <button id='subbbtn1'>➕</button>
          </div>
          <div id='subbtn'>
            <button id='subbbtn'>Top Up Service</button>
            <button id='subbbtn'>Brand</button>
            <button id='subbbtn'>Defects/Description</button>
            <button id='subbbtn'>Colors</button>
            <button id='subbbtn'>Cancel</button>
            <button id='subbbtn1' onClick={addToOrder}>Add to Order</button>
          </div>
        </div>
       </div>
       {showModal && <AddToOrderModal selectedItems={selectedItems} handleAddToOrder={handleAddToOrder} />} 
        {/* Display the ordered items */}
      <div id='orderedItems'>
        <h2 id='carttext'>Ordered Items</h2>
        <div>
          {orderedItems.map(item => (
           <div id='cartbox'>
             <img id='cartimg' src={item.image} alt="" />
             <div>
             <p id='carttext' key={item.id}>price:{item.name}</p>
             <p id='carttext' key={item.id}>product:{item.details}</p>
             <button id='removeBtn' onClick={() => removeFromCart(item.id)}>Remove</button>
             </div>
           </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
