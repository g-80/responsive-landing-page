import { useState, useEffect } from "react";
import "./styles/Header.css";
const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const breakingWidth = 1024;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleHamburgerBtnClick = () => {
    setShowNavMenu((prev) => !prev);
  };

  // this should be changed to a state
  const shoppingCartLength = 0;
  const navElement = (
    <nav className="nav flex-column-center">
      <a href="/" className="nav-item">
        Menu
      </a>
      <a href="/" className="nav-item">
        Delivery
      </a>
      <a href="/" className="nav-item">
        Bookings
      </a>
      <a href="/" className="nav-item">
        Catering
      </a>
      <a href="/" className="nav-item">
        Contact
      </a>
    </nav>
  );
  return (
    <header>
      <div className="header-svg-circle">
        <svg
          viewBox="0 0 774 586"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="204.5" cy="50.5" rx="569.5" ry="535.5" fill="#EEEBE3" />
        </svg>
      </div>
      <div className="header">
        <a href="/" className="logo">
          Lanterna
        </a>
        {windowWidth >= breakingWidth && navElement}
        <div className="header-btns-container">
          <button className="primary-btn header-btn btn-mr">
            <span className="items-number">{shoppingCartLength}</span>
            <svg
              width="25"
              height="29"
              viewBox="0 0 25 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1 25.0681L22.4394 6.36933C22.4039 5.95419 22.054 5.63988 21.6448 5.63988H18.2288C18.1814
                2.52045 15.6313 0 12.5 0C9.36869 0 6.81858 2.52045 6.77114 5.63988H3.35519C2.94006 5.63988 2.59609
                5.95419 2.56051 6.36933L0.899974 25.0681C0.899974 25.0918 0.894043 25.1155 0.894043 25.1393C0.894043
                27.2683 2.84517 29 5.24701 29H19.7529C22.1548 29 24.1059 27.2683 24.1059 25.1393C24.1059 25.1155 24.1059
                25.0918 24.1 25.0681ZM12.5 1.60123C14.7476 1.60123 16.5801 3.40409 16.6276 5.63988H8.37237C8.41981 3.40409
                10.2523 1.60123 12.5 1.60123ZM19.7529 27.3988H5.24701C3.74067 27.3988 2.51899 26.4025 2.49527 25.1748L4.08464
                7.24703H6.76521V9.67853C6.76521 10.1233 7.12104 10.4791 7.56582 10.4791C8.01061 10.4791 8.36644 10.1233 8.36644
                9.67853V7.24703H16.6276V9.67853C16.6276 10.1233 16.9834 10.4791 17.4282 10.4791C17.873 10.4791 18.2288 10.1233
                18.2288 9.67853V7.24703H20.9094L22.5047 25.1748C22.481 26.4025 21.2534 27.3988 19.7529 27.3988Z"
                fill="white"
              />
            </svg>
          </button>
          {windowWidth < breakingWidth && (
            <button
              className="primary-btn header-btn"
              onClick={handleHamburgerBtnClick}
            >
              <svg
                width="33"
                height="23"
                viewBox="0 0 33 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.5"
                  y1="1.5"
                  x2="31.5"
                  y2="1.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="1.5"
                  y1="11.5"
                  x2="31.5"
                  y2="11.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="1.5"
                  y1="21.5"
                  x2="31.5"
                  y2="21.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
      {showNavMenu && navElement}
    </header>
  );
};

export default Header;
