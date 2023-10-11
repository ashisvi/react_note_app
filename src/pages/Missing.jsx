import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <div className="missing">
      <div>
        <h1>404</h1>
        <p>There's nothing here.</p>
        <Link to="/" className="btn">
          Go to home
        </Link>
      </div>
    </div>
  );
};

export default Missing;
