import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/" className="logo">
        Lanterna
      </a>
      <div className="footer-sitemap">
        <ul>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Delivery</a>
          </li>
          <li>
            <a href="/">Bookings</a>
          </li>
          <li>
            <a href="/">Catering</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
        </ul>
      </div>
      <div className="opening-times-and-address">
        <div className="opening-times">
          <div>Opening times:</div>
          <div>
            Mon - Fri: 10:00 - 23:00 <br></br> Sat - Sun: 11:00 - 23:00
          </div>
        </div>
        <div className="phone-address-container">
          <div>020 3333 3333</div>
          <div>
            33 VERY NICE ROAD <br></br> VERY NICE TOWN <br></br> IT3 8XC
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
