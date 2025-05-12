import { Link } from "react-router-dom";

const CartSummary = ({ cartitems, taxRate }) => {
    const subTotal = cartitems.reduce((acc, item) => acc + (item.total || 0), 0);
    const cartTax = subTotal * taxRate;
    const total = subTotal + cartTax;

    return (
        <div className="col-md-4 align-self-start">
            <div className="cart">
                <div className="card-body">
                    <h1 className="card-title">Cart Summary</h1>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>{`${subTotal.toFixed(2)} ETB`}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Tax:</span>
                        <span>{`${cartTax.toFixed(2)} ETB`}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <strong>Total:</strong>
                        <strong>{`${total.toFixed(2)} ETB`}</strong>
                    </div>
                    <Link to="/checkout">
                        <button
                            className="btn btn-primary w-100 mt-4"
                            style={{
                                backgroundColor: "#79AEC8",
                                borderColor: "#79AEC8",
                            }}
                        >
                            Proceed to Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;