import "./styles/Hero.css";
import heroImage from "../assets/images/hero.png";
const Hero = () => {
  const heroText =
    "From our skillful chefs great food to our amazing waiters delightful service, we guarantee our customers a joyful experience.";

  return (
    <section>
      <div className="hero-container flex-column-center">
        <div className="hero-image">
          <svg
            viewBox="0 0 500 470"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-single-circle"
          >
            <ellipse cx="250" cy="235" rx="250" ry="235" fill="#EEEBE3" />
          </svg>

          <svg
            viewBox="0 0 619 613"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-three-circles"
          >
            <ellipse
              cx="309.5"
              cy="306.729"
              rx="296.5"
              ry="293.729"
              stroke="#BDB6A5"
              strokeWidth="25"
            />
            <ellipse
              cx="309.5"
              cy="306.729"
              rx="226.301"
              ry="223.53"
              stroke="#BDB6A5"
              strokeWidth="25"
            />
            <ellipse cx="309.5" cy="307" rx="124.5" ry="123" fill="#BDB6A5" />
          </svg>
          <div className="hero-image-container">
            <img
              alt="pizza, pasta, salad, garlic and tomatoes"
              src={heroImage}
              width="100%"
            ></img>
          </div>
        </div>
        <div className="text-btn-container flex-column-center">
          <div className="hero-text">
            <h2 className="hero-heading bold">Italian food done right</h2>
            <p>{heroText}</p>
          </div>
          <button className="primary-btn hero-btn main-btn-size">
            Explore our menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
