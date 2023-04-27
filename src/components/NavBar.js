import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'
import search from '../images/search.png'
import filter from '../images/filter.png'
import fav from '../images/fav.png'
import breeds from '../images/breeds.png'


function Navbar({toggleSearch, toggleFilter, isDarkMode, toggleDarkMode}) {

  const navLinkStyles = {
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <nav className={isDarkMode ? 'navbar-dark' : 'navbar-light'} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

      <ul className="navbar-nav">
        <li className="nav-item" style={{margin: "0 20px", textAlign: "center"}}>
        <NavLink to="/" exact className = "nav-link" activeClassName = "active" style = {navLinkStyles}>
          <img
          style={{width: 110}}
          src={logo}
          alt="logo"
          />
          <div>Home</div>
        </NavLink>
        </li>

        <li className="nav-item" style={{margin: "0 10px", textAlign: "center"}}>
          <NavLink to="/breeds" exact className = "nav-link" activeClassName = "active" style = {navLinkStyles}>
            <img
            style={{width: 110}}
            src={breeds}
            alt="Breeds" />
            <div>Breeds</div>
        </NavLink>
        </li>

        <li className="nav-item" style={{margin: "0 20px", textAlign: "center"}}>
          <img
            style={{width: 145}}
            src={search}
            alt="Search"
            onClick={toggleSearch}
          />
          <div style={{color: "black"}}>Hide/Show Search</div>
        </li>

        <li className="nav-item" style={{margin: "0 15px", textAlign: "center"}}>
          <img
            style={{width: 150}}
            src={filter}
            alt="Filter"
            onClick={toggleFilter}
          />
          <div style={{color: "black"}}>Hide/Show Filter</div>
        </li>


        <li className="nav-item" style={{margin: "0 10px", textAlign: "center"}}>
          <NavLink to="/favorites" exact className = "nav-link" activeClassName = "active" style = {navLinkStyles}>
            <img
            style={{width: 140}}
            src={fav}
            alt="Favorites" />
            <div>Favorites</div>
        </NavLink>
        </li>

        <li className="nav-item" style={{margin: "0 10px", textAlign: "center"}}>
          <button
            onClick={toggleDarkMode}
            style={{
              backgroundColor: isDarkMode ? "#1a1a1a" : "#f2f2f2",
              color: isDarkMode ? "#f2f2f2" : "#1a1a1a",
              border: "none",
              borderRadius: "50px",
              padding: "12px 20px",
              boxShadow: "2px 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer"
            }}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
