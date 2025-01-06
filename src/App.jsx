// 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import HomePage from "./components/home/Homepage"
import NotFoundPage from "./components/ui/NotFoundPage"
import ProductPage from "./components/product/ProductPage"
import { useEffect, useState } from "react"
import api from "./api"
import CartPage from "./components/cart/CartPage"
import CheckoutPage from "./components/checkout/CheckoutPage"
import LoginPage from "./components/user/LoginPage"
import SignupPage from "./components/user/SignupPage"
import ProtectedRoute from "./components/ui/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"
import UserProfilePage from "./components/user/UserProfilePage"
import EditProfilePage from "./components/user/EditProfilePage"
import PaymentStatusPage from "./components/payment/PaymentStatusPage"
import AboutPage from "./components/home/AboutPage"
import ContactPage from "./components/home/ContactPage"
// import CardContainer from "./components/home/CardContainer"
import ParentCategory from "./components/home/ParentCategory"
// import PaymentSection from "./components/checkout/PaymentSection"


const App = () => {

  const [numCartItems, setNumberCartItems] = useState(0)
  const cart_code = localStorage.getItem("cart_code")


  useEffect(function() {
    if(cart_code){
      api.get(`get_cart_stat?cart_code = ${cart_code}`)
      .then(res => {
        console.log(res.data)
        setNumberCartItems(res.data.num_of_items)

      })
      .catch(err => {
        console.log(err.message)
      })
      }
  }, [])
  

  return (
    <AuthProvider>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainLayout numCartItems={numCartItems} />}>
      <Route index  element={<HomePage />}/>
      <Route path="about" element={<AboutPage />} />
      <Route path="category" element={<ParentCategory />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="products/:slug" element={<ProductPage setNumberCartItems = {setNumberCartItems} />} />
      <Route path="cart" element={<CartPage setNumberCartItems={setNumberCartItems}/>} />
      <Route path="checkout" element={
        <ProtectedRoute> 
          <CheckoutPage />
        </ProtectedRoute>  } />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="profile" element={<UserProfilePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="/edit-profile" element={<EditProfilePage />}  />
      <Route path="*"  element={<NotFoundPage />}/>
      <Route path="payment_status" element={<PaymentStatusPage setNumberCartItems={setNumberCartItems} />} />
      </Route>
     </Routes>
    
    </BrowserRouter>
    </AuthProvider>
  )
}

export default App
