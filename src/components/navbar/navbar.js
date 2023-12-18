import React, { useState } from "react";
import "./navbar.css";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="navbar-fixed">
        <div className="navBar">
          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="ecommerce" id="ecommerce">
            E-COMMERCE
          </div>
          <div
            className={`navbar-items ${isMobileMenuOpen ? "mobilemenu" : ""}`}
          >
            <a href="#home" onClick={closeMobileMenu}>
              <Link to='/'>HOME</Link>
            </a>
            <a href="#home" onClick={closeMobileMenu}>
            <Link to='/product'>PRODUCT</Link>
            </a>
            <a href="#contactus" onClick={closeMobileMenu}>
            <Link to='/contact'>CONTACT</Link>
            </a>

            {isAuthenticated && (
              <a href="#account">
                <div className="account">
                  <div className="user-icon">
                    <CiUser />
                  </div>
                  <p>{user.name}</p>
                </div>
              </a>
            )}

           

            <a className="auth">
              {isAuthenticated ? (
                <button
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  LOGOUT
                </button>
              ) : (
                <button
                  onClick={() => {
                    loginWithRedirect();
                  }}
                >
                  LOGIN
                </button>
              )}
            </a>
            <a href="#cart" className="cart" onClick={closeMobileMenu}>
              <div className="cartlogo">
                <CiShoppingCart />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
