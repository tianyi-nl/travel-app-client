import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{ textAlign: "center", padding: "3rem" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for does not exist or cannot be loaded.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default ErrorPage;