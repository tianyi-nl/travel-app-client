
import { Link } from "react-router-dom"



function NavBar() {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-slate-900 text-white">
      <nav >
        <ul className="flex gap-6">
          <li>
            <Link to="/"className="hover:text-blue-200">Home</Link>
          </li>

          <li>
            <Link to="/travelPlans/create" className="hover:text-blue-200">Add Travel Plan</Link>
          </li>

          <li>
            <Link to="/creator" className="hover:text-blue-200">Creator</Link>
          </li>

          <li>
            
            <Link to="/about" className="hover:text-blue-200">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;