import React, { useState } from 'react';

const AddToOrderModal = ({ selectedItems, handleAddToOrder }) => {
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const handleConfirm = () => {
    if (selectedProduct) {
      handleAddToOrder(selectedProduct);
    }
  };

  return (
    <div className="modal">
      <h3>Select Product:</h3>
      <select id='orderinp' value={selectedProduct} onChange={handleProductChange}>
        <option value="">Select a product</option>
        {selectedItems.map(item => (
          <option key={item.id} value={item.id}>{item.details}</option>
        ))}
      </select>
      <button id='orderbtn' onClick={handleConfirm}>Confirm to add</button>
    </div>
  );
};

export default AddToOrderModal;
