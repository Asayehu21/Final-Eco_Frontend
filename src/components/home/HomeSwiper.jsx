// components/HomeSwiper.js
// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import clothes from "../../assets/clothes2.png";
import shoes from "../../assets/Shoes-Nike.jpg";
import computer from "../../assets/computers.png";
import groceries from "../../assets/groceries.jpg";


const slides = [
  {
    id: 1,
    image: clothes,
    title: "Clothes",
    subtitle: "Elevate Your Style, Define Your Look!",
    // buttonText: "Explore Now",
    // link: "/services",
  },
  {
    id: 2,
    image: computer,
    title: "Electronics",
    subtitle: "Power Your World with Innovation!",
    // buttonText: "Start Selling",
  //  link: "/ecommerce",
  },
  {
    id: 3,
    image:shoes,
    title: "Shoes",
    subtitle: "Step into Style and Comfort!",
    // buttonText: "Get Started",
    // link: "/contact",
  },
  {
    id: 4,
    image:groceries,
    title: "Groceries",
    subtitle: "Fresh Finds—Quality Essentials Delivered",
    // buttonText: "Get Started",
    // link: "/contact",
  },
];

const HomeSwiper = () => {
  return (
    <div className="container-fluid p-0">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="position-relative w-100" style={{ height: "400px" }}>
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
              {/* Overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center px-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
                <h2 className="display-4 fw-bold mb-2">{slide.title}</h2>
                <p className="lead mb-4">{slide.subtitle}</p>
                <a
                  href={slide.link}
                  className="btn btn-primary btn-lg px-4"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
