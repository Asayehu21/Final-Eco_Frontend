// import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import api from '../../api'

const PaymentStatusPage = ({setNumberCartItems}) => {

  const [statusMessage, setStatusMessage] = useState("Verifying your payment")
  const [statusSubMessage, setStatusSubMessage] = useState('Wait a moment, your payment is being verified!')
  const location = useLocation();


  useEffect(function(){

    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status');
    const txRef = queryParams.get('tx_ref')
    const transactionId = queryParams.get('transaction_id');

    if(status && txRef && transactionId){
      api.post(`payment_callback/?status=${status}&tx_ref=${txRef}&transaction_id=${transactionId}`)
      .then(res => {
        setStatusMessage(res.data.message)
        setStatusSubMessage(res.data.subMessage)
        localStorage.removeItem("cart_code")
        setNumberCartItems(0)
      })
      .catch(err => console.log(err.message))
    }
  }, [])

  
  return (
    <header className='py-5' style={{backgroundColor: "#6050DC"}}>
        <div className='container px-4 px-lg-5 my-5'>
            <div className="text-center text-white">
                <h2 className="display-4 fw-bold">{statusMessage}</h2>
                <p className="lead fw-normal text-white-75 mb-4">{statusSubMessage}</p>
                <span>
                    <Link to="/shipping" className="btn btn-light btn-lg px-4 py-2 mx-3">Add Your Address</Link>
                    <Link to="/category" className="btn btn-light btn-lg px-4 py-2 mx-3">Continue Shopping</Link>
                </span>
            </div>
        </div>

    </header>
  )
}

export default PaymentStatusPage
