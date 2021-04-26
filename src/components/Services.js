import svg from "../assets/svg/svg";
import "./styles/Services.css";

const Services = () => {
  const services = [
    {
      svg: svg.pizza,
      text: "Pizzas are made with real stone pizza oven.",
      alt: "pizza",
    },
    {
      svg: svg.salad,
      text: "Every single ingredient is as fresh as it can get.",
      alt: "lettuce",
    },
    {
      svg: svg.delivery,
      text: "We offer delivery on any order.",
      alt: "delivery",
    },
    {
      svg: svg.plates,
      text: "Having a party or an event? We offer catering services.",
      alt: "plates",
    },
  ];
  return (
    <section>
      <div className="services-container flex-column-center">
        {services.map((service, i) => {
          return (
            <div key={i} className="service flex-column-center">
              <div className="service-icon">{service.svg}</div>
              <p>{service.text}</p>
            </div>
          );
        })}
      </div>
      <div className="h-line"></div>
    </section>
  );
};

export default Services;
