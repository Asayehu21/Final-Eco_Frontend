//import React from 'react'

import OrderSummary from "./OrderSummary"
import PaymentSection from "./PaymentSection"
import useCartData from "../../hooks/useCartData"

const CheckoutPage = () => {
    const { cartitems, setCartItems, cartTotal, loading, tax, taxRate} = useCartData()
  return (
    <div className="container my-3">
        <div className="row">
        <OrderSummary cartitems={cartitems} cartTotal={cartTotal} tax={tax}/>
            <PaymentSection />
        </div>
      
    </div>
  )
}

export default CheckoutPage
