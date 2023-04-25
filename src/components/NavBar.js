import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const logoUrl = 'https://cdn.dribbble.com/userupload/3679947/file/original-d28f01f029c541598daa578148346391.png?compress=1&resize=400x300&vertical=top'
  const searchLogoUrl = 'https://www.nicepng.com/png/detail/350-3506490_search-icon-small-search-icon-small-png.png'
  const filterLogoUrl = 'https://t3.ftcdn.net/jpg/04/02/77/08/360_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg'
  const favoriteLogoUrl = 'https://static.vecteezy.com/system/resources/previews/018/972/339/original/cartoon-red-heart-icon-game-isolated-icon-png.png'
  const breedLogoUrl = 'https://st4.depositphotos.com/19289694/23725/v/450/depositphotos_237258288-stock-illustration-vector-illustration-set-icons-cartoon.jpg'

  return (
    <nav className="navbar" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

      <ul className="navbar-nav" style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 0, padding: 0}}>
        <h1 className="nav-item" style={{margin: "0 1px"}}>
        <NavLink to="/">
          <img
          style={{width: 150}}
          src={logoUrl}
          alt="Logo"
          />
        </NavLink>
        </h1>

        <h1 className="nav-item" style={{margin: "0 10px"}}>
          <NavLink to="/breeds" >
            <img
            style={{width: 100}}
            src={breedLogoUrl}
            alt="Breeds" />
        </NavLink>
        </h1>
        
        <h1 className="nav-item" style={{margin: "0 20px"}}>
          <NavLink to="/search">
            <img
            style={{width: 50}}
            src={searchLogoUrl}
            alt="Search" />
          </NavLink>
        </h1>

        <h1 className="nav-item" style={{margin: "0 15px"}}>
          <NavLink to="/filter">
            <img
            style={{width: 100}}
            src={filterLogoUrl}
            alt="Filter" />
          </NavLink>
        </h1>

        <h1 className="nav-item" style={{margin: "0 10px"}}>
          <NavLink to="/favorites" >
            <img
            style={{width: 50}}
            src={favoriteLogoUrl}
            alt="Favorites" />
        </NavLink>
        </h1>

      </ul>
    </nav>
  );
}

export default Navbar;
