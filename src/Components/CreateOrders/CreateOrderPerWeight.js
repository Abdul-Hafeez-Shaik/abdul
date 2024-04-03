import React, { useState } from 'react';
import iron from '../../Assets/Images/ironing.png';
import washAndFold from '../../Assets/Images/fashion.png';
import premiumLaundry from '../../Assets/Images/laundry-machine.png';
import woolenLaundry from '../../Assets/Images/knit.png';
import  woolenService from '../../Assets/Images/knitting.png';
import laundryForWhites from '../../Assets/Images/washing-machine.png';
import '../../Styles/CreateOrders/createOrderPerWeight.css';

function CreateOrderPerWeight() {
  const [showModal, setShowModal] = useState(false);
  const handleAddOnButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className='copw-main-container'>
      <div className='copw-selection-type'>
        <div className='copw-selections'>
          <div className='copw-selection-containers'>
            <p>Wash Steam And Iron</p>
            <img src={iron} alt="" />
          </div>
          <div className='copw-selection-containers'>
            <p>Wash And Fold</p>
            <img src={washAndFold} alt="" />
          </div>
          <div className='copw-selection-containers'>
            <p>Premium Laundry</p>
            <img src={premiumLaundry} alt="" />
          </div>
          <div className='copw-selection-containers'>
            <p>Woolen Laundry Service</p>
            <img src={woolenService} alt="" />
          </div>
          <div className='copw-selection-containers'>
            <p>Woolen Laundry (Wash & Fold)</p>
            <img src={woolenLaundry} alt="" />
          </div>
          <div className='copw-selection-containers'>
            <p>Laundry For Whites</p>
            <img src={laundryForWhites} alt="" />
          </div>
        </div>
        <hr className='copw-hr-line'/>
        <div className='copw-prices'>
          <div className='copw-prices-items'>
            <div className='copw-labels'>Weight</div>
            <input className='copw-inputs' type="text" />
          </div>
          <div className='copw-prices-items'>
            <div className='copw-labels'>Price/KG</div>
            <input className='copw-inputs' type="text" />
          </div>
          <div className='copw-prices-items'>
            <div className='copw-labels'>No. Of Garments</div>
            <input className='copw-inputs' type="text" />
          </div>
          <div className='copw-buttons'>
            <button className='copw-add-btn' onClick={handleAddOnButtonClick}>Add on</button>
            <button className='copw-add-btn' style={{marginLeft: "24px"}} >Garment Details</button>
          </div>
          <button className='copw-add-cart-btn' >Add to Cart</button>
        </div>
      </div>
      <div className='copw-selected'>
        <p className='copw-selected-text'>Selected Garments</p>
        <hr className='copw-selected-hr-line'/>
        <div className='copw-total-price-container'>
          <div className='copw-pricing-list'>
            <p className='copw-pricings'>Weight (KG) : <span className='copw-span'>2</span>  </p>
            <p className='copw-pricings'>Garments :  <span className='copw-span'>10</span></p>
          </div>
          <hr className='copw-total-hr'/>
          <p className='copw-total-price'>INR 125.00</p>
        </div>
        <button className='copw-checkout-btn'>Checkout</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-dialog" style={{ width: '460px' }}>
            <div className="modal-content">
              <div className="panel panel-primary" style={{ margin: '5px' }}>
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Top Up Services
                    <button type="button" className="close" id="Button1" onClick={() => setShowModal(false)}>
                      <span aria-hidden="true"><i className="fa fa-times-circle"></i></span>
                      <span className="sr-only">Close</span>
                    </button>
                  </h3>
                </div>
                <div className="panel-body well-sm-tiny" id="divTopupServiceData">
                  {/* Your modal body content */}
                </div>
                <div className="row-fluid TopUpServiceStyle" style={{ marginLeft: '0px' }}>
                  {/* Your modal footer content */}
                  <a id="btnProceed" className="btn btn-primary" href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$btnProceed','')">Proceed</a>&nbsp;
                  <a id="btnCancelTopUp" className="btn btn-default" href="javascript:__doPostBack('ctl00$ContentPlaceHolder1$btnCancelTopUp','')" style={{ display: 'none' }}>Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}  
    </div>
  )
}

export default CreateOrderPerWeight