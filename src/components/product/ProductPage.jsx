import { useParams } from "react-router-dom";
import ProductPagePlaceHolder from "./ProductPagePlaceHolder";
import RelatedProducts from "./RelatedProducts";
import api from "../../api";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../api";
import { toast } from "react-toastify";

const ProductPage = ({ setNumberCartItems }) => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inCart, setInCart] = useState(false);

  const cart_code = localStorage.getItem("cart_code");

  // Fetch product details and check if the product is in the cart
  useEffect(() => {
    if (cart_code && slug) {
      // Fetch product details first
      api
        .get(`product_detail/${slug}`)
        .then((res) => {
          setProduct(res.data);
          setSimilarProducts(res.data.similar_products);
          setLoading(false);

          // Once product is fetched, check if it's already in the cart
          return api.get(
            `product_in_cart?cart_code=${cart_code}&product_id=${res.data.id}`
          );
        })
        .then((res) => {
          setInCart(res.data.product_in_cart);
        })
        .catch((err) => {
          console.error("Error fetching product or cart status:", err.message);
          setLoading(false);
        });
    }
  }, [slug, cart_code]);

  // Add item to cart
  const add_item = () => {
    const newItem = { cart_code: cart_code, product_id: product.id };
    api
      .post("add_item/", newItem)
      .then((res) => {
        console.log(res.data);
        setInCart(true);
        toast.success("Product added to Cart")
        setNumberCartItems((curr) => curr + 1); // Update parent component cart count
      })
      .catch((err) => {
        console.error("Error adding to cart:", err.message);
      });
  };

  if (loading) {
    return <ProductPagePlaceHolder />;
  }

  const placeholderImage = "path/to/placeholder.jpg";

  return (
    <div>
      <section className="py-3">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={`${BASE_URL}${product.image || placeholderImage}`}
                alt={product.name || "Product image"}
              />
            </div>
            <div className="col-md-6">
              {/* <div className="small mb-1">SKU: BST-498</div> */}
              <h1 className="display-5 fw-bolder">{product.name || "Product Name"}</h1>
              <div className="fs-5 mb-5">
                {product.discounted_price && (
                  <span className="text-decoration-line-through">{`${product.price} ETB`}</span>
                )}
                <span>{`${product.discounted_price || product.price} ETB`}</span>
              </div>
              <p className="lead">{product.description || "No description available."}</p>
              <div className="d-flex">
                <button
                  className="btn btn-outline-success flex-shrink-0"
                  type="button"
                  onClick={add_item}
                  disabled={inCart}
                >
                  <i className="bi-cart-fill me-1"></i>
                  {inCart ? "Product added to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts products={similarProducts} />
    </div>
  );
};

export default ProductPage;