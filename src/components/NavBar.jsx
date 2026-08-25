import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <h1>Travel App</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/travel-plans">Travel Plans</a></li>
          <li><a href="/Creator">Creator</a></li>
          <li><a href="/add-travel-plan">Add Travel Plan</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;