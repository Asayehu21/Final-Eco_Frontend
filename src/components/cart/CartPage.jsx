import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import api from "../../api";
import Spinner from "../ui/Spinner";
import useCartData from "../../hooks/useCartData";

const CartPage = ({ setNumberCartItems }) => {
    // const cart_code = localStorage.getItem("cart_code");
    // const [cartitems, setCartItems] = useState([]);
    // const taxRate = 0.15; // 15%
    // const [loading, setLoading] = useState(false)

    // // Calculate the total dynamically based on cart items
    // const cartTotal = cartitems.reduce((acc, item) => acc + (item.total || 0), 0);
    // const tax = cartTotal * taxRate;

    // useEffect(() => {
    //     setLoading(true)
    //     api.get(`get_cart?cart_code=${cart_code}`)
    //         .then((res) => {
    //             setLoading(false)
    //             const updatedItems = res.data.items.map((item) => ({
    //                 ...item,
    //                 total: item.product.price * item.quantity, // Ensure total is calculated
    //             }));
    //             setCartItems(updatedItems);
    //         })
    //         .catch((err) => {
    //             console.error("Error fetching cart data:", err.message);
    //             setLoading(false)
    //         });
    // }, []);

    const { cartitems, setCartItems, cartTotal, loading, tax, taxRate} = useCartData()

    if(loading){
        return <Spinner loading={loading}/>
    }


    if (cartitems.length < 1) {
        return (
            <div className="alert alert-primary my-5 py-5 text-center" role="alert">
                You haven't added any item to your cart.
            </div>
        );
    }

    return (
        <div className="container my-3 py-3" style={{ height: "80vh", overflow: "scroll" }}>
            <h3 className="mb-4">Shopping Cart</h3>
            <div className="row">
                <div className="col-md-8">
                    {cartitems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            cartitems={cartitems}
                            setCartItems={setCartItems}
                            setNumberCartItems={setNumberCartItems}
                        />
                    ))}
                </div>
                <CartSummary cartitems={cartitems} taxRate={taxRate} />
            </div>
        </div>
    );
};

export default CartPage;
