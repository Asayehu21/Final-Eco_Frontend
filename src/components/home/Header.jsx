// import React from 'react'
import HomeSwiper from "./HomeSwiper";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <header className="py-5" style={{ backgroundColor: "#f4f7fc"}}>
        <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-black">
                <h1 className="display-4 fw-semibold"> Welcome To Your {' '}
                {/* <h1 className="text-3xl fw-semibold font-bold text-green-400 mb-6"> */}
            <TypeAnimation
              sequence={[
                "Favorite Shop",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              style={{ color: '#3b82f6' }} // Blue color
              
            />
          </h1>


                <p className="lead fw-normal text-white-75 mb-4">Quality Products, Unbeatable Prices!</p>
                <HomeSwiper />
                <a href="#shop" className="btn btn-primary btn-lg rounded-pill mt-4 px-4 py-2">Shop Now</a>
            </div>
           
        </div>
    </header>
  )
}

export default Header
