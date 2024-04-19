import React, { useState } from 'react';
import PopupForm from './components.jsx/PopupForm';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    
    <div>
      {!showPopup && <button id='openbtn' onClick={togglePopup}>Open Form</button>}
      {showPopup && <PopupForm onClose={togglePopup} />}
    </div>
  );
}

export default App;
