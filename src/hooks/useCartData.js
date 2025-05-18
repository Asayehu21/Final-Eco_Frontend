import { useState, useEffect } from "react";
import api from "../api";

function useCartData(){
    const cart_code = localStorage.getItem("cart_code")
    const [cartitems, setCartItems] = useState([]);
    //const [cartTotal, setCartTotal] = useState(0.00)
    const taxRate = 0.15; // 15%
    const comRate = 0.02; //2%
    const [loading, setLoading] = useState(false)

    // Calculate the total dynamically based on cart items
    const cartTotal = cartitems.reduce((acc, item) => acc + (item.total || 0), 0);
    const tax = cartTotal * taxRate;
    const com = cartTotal * comRate;

    useEffect(() => {
        setLoading(true)
        api.get(`/get_cart?cart_code=${cart_code}`)
            .then((res) => {
                setLoading(false)
                const updatedItems = res.data.items.map((item) => ({
                    ...item,
                    total: item.product.price * item.quantity, // Ensure total is calculated
                }));
                setCartItems(updatedItems);
            })
            .catch((err) => {
                console.error("Error fetching cart data:", err.message);
                setLoading(false)
            });
    }, [cart_code]);

    return { cartitems, setCartItems, cartTotal, loading, taxRate, tax, comRate, com}

}

export default useCartData