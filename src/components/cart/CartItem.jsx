import { useState } from "react";
import api from "../../api";
import { BASE_URL } from "../../api";
import { toast } from "react-toastify";

const CartItem = ({ item, cartitems, setCartItems, setNumberCartItems }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [loading, setLoading] = useState(false);

    const itemData = { quantity, item_id: item.id };
    const itemID = { item_id: item.id };

    function deleteCartItem() {
        const confirmDelete = window.confirm("Are you sure you want to delete this cart item?");

        if (confirmDelete) {
            api.post("/delete_cartitem/", itemID)
                .then(res => {
                    console.log(res.data);
                    toast.success("Cartitem Deleted Successfully")
                    setCartItems(prevItems => prevItems.filter(cartitem => cartitem.id !== item.id));
                    setNumberCartItems(prev => prev - quantity); // Adjust the number of cart items
                    // toast.success("Cart item removed successfully!");
                })
                .catch(err => {
                    console.log(err.message);
                    toast.error("Failed to remove cart item.");
                });
        }
    }

    function updateCartItem() {
        setLoading(true);
        api.patch("update_quantity/", itemData)
            .then((res) => {
                console.log(res.data);
                setLoading(false);
                toast.success("Cart item updated successfully!");
                const updatedItems = cartitems.map((cartitem) =>
                    cartitem.id === item.id
                        ? { ...cartitem, quantity, total: cartitem.product.price * quantity }
                        : cartitem
                );
                setCartItems(updatedItems);
                setNumberCartItems(updatedItems.reduce((acc, curr) => acc + curr.quantity, 0)); // Update total quantity
            })
            .catch((err) => {
                console.log("Error updating item:", err.message);
                setLoading(false);
            });
    }

    return (
        <div className="col-md-12">
            <div className="cart-item d-flex align-items-center mb-3 p-3" style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}>
                <img
                    src={`${BASE_URL}${item.product.image}`}
                    alt="Product Image"
                    className="img-fluid"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
                    onError={(e) => { e.target.src = "path/to/placeholder-image.jpg"; }}
                />
                <div className="ms-3 flex-grow-1">
                    <h5 className="mb-1">{item.product.name}</h5>
                    <p className="mb-0 text-muted">{`${item.product.price} ETB`}</p>
                </div>
                <div className="d-flex align-items-center">
                    <input
                        type="number"
                        min="1"
                        className="form-control me-3"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        style={{ width: "70px" }}
                    />
                    <button
                        className="btn btn-sm mx-2"
                        style={{ backgroundColor: "#4b3bcb", color: "white" }}
                        onClick={updateCartItem}
                    >
                        Update
                    </button>
                    <button className="btn btn-danger btn-sm" onClick={deleteCartItem}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;