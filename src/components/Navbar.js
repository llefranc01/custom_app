import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/Webhooks" className="nav-link">Webhook example</Link>
          </li>
          <li className="nav-item">
            <Link to="/Counter" className="nav-link">useState Counter</Link>
          </li>
          <li className="nav-item">
            <Link to="/Table" className="nav-link">Table example</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;