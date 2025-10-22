import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} fixed-top`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Newsify</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['general','business','entertainment','health','science','sports','technology'].map(category => (
              <li className="nav-item" key={category}>
                <Link className="nav-link" to={`/${category}`}>{category.charAt(0).toUpperCase() + category.slice(1)}</Link>
              </li>
            ))}
          </ul>
          <div className="form-check form-switch text-nowrap">
            <input className="form-check-input" type="checkbox" id="darkSwitch" checked={darkMode} onChange={toggleDarkMode} />
            <label className="form-check-label" htmlFor="darkSwitch">{darkMode ? 'Dark Mode' : 'Light Mode'}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
