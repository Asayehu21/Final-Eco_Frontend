// import React from 'react'
import styles from "./OrderHistoryItem.module.css"
const OrderHistoryItem = () => {
  return (
    <div className='card-body'>
        <div className={`order-item mb-3 ${styles.OrderItem}`}>
            <div className="row">
                <div className='col-md-2'>
                    <img
                      src='assets/hp3.jpg'
                      alt='Order Item'
                      className='img-fluid'
                      style={{ borderRadius:"5px"}}
                      />
                </div>
                <div className="col-md-6">
                    <h6>Product Name</h6>
                    <p>Order Date: Dec 29, 2024</p>
                    <p>Order ID: 1234567</p>
                </div>
                <div className="col-md-2 text-center">
                    <h6 className="text-muted">Quantity: 1</h6>
                </div>
                <div className="col-md-2 text-center">
                    <h6 className="text-muted">100000 ETB</h6>
                </div>
            </div>
            
        </div>
        <div className={`order-item mb-3 ${styles.OrderItem}`}>
            <div className="row">
                <div className='col-md-2'>
                    <img
                      src='assets/hp3.jpg'
                      alt='Order Item'
                      className='img-fluid'
                      style={{ borderRadius:"5px"}}
                      />
                </div>
                <div className="col-md-6">
                    <h6>Product Name</h6>
                    <p>Order Date: Dec 29, 2024</p>
                    <p>Order ID: 1234567</p>
                </div>
                <div className="col-md-2 text-center">
                    <h6 className="text-muted">Quantity: 1</h6>
                </div>
                <div className="col-md-2 text-center">
                    <h6 className="text-muted">100000 ETB</h6>
                </div>
            </div>
            
        </div>

        <div className={`order-item mb-3 ${styles.OrderItem}`}>
            <div className="row">
                <div className='col-md-2'>
                    <img
                      src='assets/hp3.jpg'
                      alt='Order Item'
                      className='img-fluid'
                      style={{ borderRadius:"5px"}}
                      />
                </div>
                <div className="col-md-6">
                    <h6>Product Name</h6>
                    <p>Order Date: Dec 29, 2024</p>
                    <p>Order ID: 1234567</p>
                </div>
                <div className="col-md-2 text-center">
                    <h6 className="text-muted">Quantity: 1</h6>
                </div>
                <div className="col-md-2 text-center">
                    <h6 className="text-muted">100000 ETB</h6>
                </div>
            </div>
            
        </div>
        {/* Repeat for Other Orders */}
      
    </div>
  )
}

export default OrderHistoryItem
