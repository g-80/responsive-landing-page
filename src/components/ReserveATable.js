import "./styles/ReserveATable.css";

const ReserveATable = () => {
  return (
    <section>
      <div className="reserve-container flex-column-center">
        <div className="flex-column-center">
          <h3 className="semi-bold">Reserve your table online</h3>
          <p>
            Reserve a table so you have a confirmed place and never have to
            wait.
          </p>
        </div>
        <button className="primary-btn main-btn-size">Reserve a table</button>
      </div>
    </section>
  );
};

export default ReserveATable;
