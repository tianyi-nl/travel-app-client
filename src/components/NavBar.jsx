
import { Link } from "react-router-dom"



function NavBar() {
  return (
    <div className="NavBar">
      <h1>Travel App</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/creator">Creator</Link>
          </li>

          <li>
            <Link to="/travelPlans/create">Add Travel Plan</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;