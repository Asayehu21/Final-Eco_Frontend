import { useState } from 'react';
import styles from './PaymentSection.module.css';
import api from '../../api';

const PaymentSection = () => {
  const cart_code = localStorage.getItem("cart_code");
  const [loading, setLoading] = useState(false);

  // Initiate payment process
  function makePayment() {
    setLoading(true);  // Start loading
    api.post("initiate_payment/", { cart_code })
      .then(res => {
        setLoading(false); // Stop loading
        console.log(res.data);
        if (res.data.data && res.data.data.link) {
          window.location.href = res.data.data.link; // Redirect to payment link
        } else {
          console.error("Payment link not available.");
        }
      })
      .catch(err => {
        setLoading(false); // Stop loading
        console.error("Error during payment initiation:", err.message);
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <div className="col-md-4">
      <div className={`card ${styles.card}`}>
        <div className="card-header" style={{ backgroundColor: '#6050DC', color: "white" }}>
          <h5>Payment Options</h5>
        </div>
        <div className="card-body">
          <button className={`btn btn-primary w-100 mb-3 ${styles.paypalButton}`} id="paypal-button" disabled={loading}>
            <i className="bi bi-paypal"></i> Pay with PayPal
          </button>

          <button
            className={`btn btn-warning w-100 ${styles.flutterwaveButton}`}
            onClick={makePayment}
            id="flutter-wave-button"
            disabled={loading} // Disable button while loading
          >
            {loading ? (
              <span>Loading...</span>
            ) : (
              <>
                <i className="bi bi-credit-card"></i> Pay with Flutterwave
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;
