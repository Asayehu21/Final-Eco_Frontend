import { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import NavBarLink from "./NavBarLink";
import logo from "../../assets/final-logo.png"; // Path to your logo file

const NavBar = ({ numCartItems }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
      <div className="container">
        {/* Logo and Brand Name */}
        <Link className="navbar-brand d-flex align-items-center fw-bold text-uppercase" to="/">
          <img src={logo} alt="Shopp It Logo" style={{ height: '60px', marginRight: '10px' }} />
          Shopp It
        </Link>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          aria-controls="navbarContent"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links and Cart */}
        <div className={`collapse navbar-collapse justify-content-center ${isNavOpen ? 'show' : ''}`} id="navbarContent">
          <NavBarLink />
          <Link to="/cart" className={`btn btn-info ms-3 rounded-pill position-relative ${styles.responsiveCart}`}>
            <FaCartShopping />
            {numCartItems > 0 && (
              <span 
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                style={{ fontSize: '0.85rem', padding: '0.5em', backgroundColor: '#6050DC' }}
              >
                {numCartItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;