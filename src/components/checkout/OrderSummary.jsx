//import React from 'react'
import OrderItem from './OrderItem'
import styles from './OrderSummary.module.css'

const OrderSummary = ({ cartitems, cartTotal, tax, com }) => {

  const total = (cartTotal + tax + com).toFixed(2)
  return (
    <div className='col-md-8'>
        <div className={`card mb-4 ${styles.card}`}>
            <div className='card-header' style={{ backgroundColor:'#79AEC8', color:'white'}}>
                <h5>Cart Summary</h5>
            </div>
            <div className='card-body'>
                <div className='px-3' style={{ height:'300px', overflow:'auto'}}>
                {cartitems.map(cartitem => <OrderItem key={cartitem.id} cartitem={cartitem} />)}

                   {/* <OrderItem /> */}

                </div>

                <hr />
                <div className='d-flex justify-content-between'>
                    <strong>Total</strong>
                    <strong>{`${total} ETB`}</strong>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderSummary
