import { Link } from 'react-router-dom';
import SpaceyaTechHome from '../../assets/SpaceyaTechHomeLogo.svg';
import './Navbar.css';
function Navbar() {
  return (
    <nav>
      <div className="navbar">
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
            <Link to="/about">About us</Link>
          </li>
        </ul>

        <div className="cta-links">
          <Link to="/login" className="login">
            Login
          </Link>
          <Link to="/signup" className="signup">
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
