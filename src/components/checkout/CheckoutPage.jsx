//import React from 'react'
import OrderSummary from "./OrderSummary"
import PaymentSection from "./PaymentSection"
import useCartData from "../../hooks/useCartData"

const CheckoutPage = () => {
    const { cartitems, setCartItems, cartTotal, loading, tax, taxRate, comRate, com} = useCartData()
  return (
    <div className="container my-3">
        <div className="row">
        <OrderSummary cartitems={cartitems} cartTotal={cartTotal} tax={tax} com={com}/>
            <PaymentSection />
        </div>
      
    </div>
  )
}

export default CheckoutPage
