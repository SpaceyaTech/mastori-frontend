import { Link } from 'react-router-dom';
import SpaceyaTechHome from '../../assets/SpaceyaTechHomeLogo.svg';
import './Navbar.css';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={SpaceyaTechHome} alt="SpaceyaTech logo" />
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/forums">Forums</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <div className="nav-cta-links">
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;
