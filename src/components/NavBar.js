import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const logoUrl = 'https://cdn.dribbble.com/userupload/3679947/file/original-d28f01f029c541598daa578148346391.png?compress=1&resize=400x300&vertical=top'
  const searchLogoUrl = 'https://www.nicepng.com/png/detail/350-3506490_search-icon-small-search-icon-small-png.png'
  const filterLogoUrl = 'https://t3.ftcdn.net/jpg/04/02/77/08/360_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg'

  return (
    <nav className="navbar" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="navbar-brand">
        <NavLink to="/">
          <img
          style={{width: 150}}
          src={logoUrl}
          alt="Logo"
          />
        </NavLink>
      </div>
      <NavLink to="/breeds" >
          BREEDS
          {/* replace with icon? */}
      </NavLink>
      <ul className="navbar-nav" style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 0, padding: 0}}>
        <h1 className="nav-item" style={{margin: "0 10px"}}>
          <NavLink to="/search">
            <img
            style={{width: 50}}
            src={searchLogoUrl}
            alt="Search" />
          </NavLink>
        </h1>
        <h1 className="nav-item" style={{margin: "0 10px"}}>
          <NavLink to="/filter">
            <img
            style={{width: 100}}
            src={filterLogoUrl}
            alt="Filter" />
          </NavLink>
        </h1>
      </ul>
    </nav>
  );
}

export default Navbar;
