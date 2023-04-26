import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({toggleSearch, toggleFilter}) {

  const logoUrl = 'https://cdn.dribbble.com/userupload/3679947/file/original-d28f01f029c541598daa578148346391.png?compress=1&resize=400x300&vertical=top'
  const searchLogoUrl = 'https://cdn.dribbble.com/users/1677939/screenshots/8817404/google_icon_-_dribbble.jpg'
  const filterLogoUrl = 'https://t3.ftcdn.net/jpg/04/02/77/08/360_F_402770898_3yxaOfo0e8sTJ6mgebY1KaOPcwgWKSHE.jpg'
  const favoriteLogoUrl = 'https://static.vecteezy.com/system/resources/previews/018/972/339/original/cartoon-red-heart-icon-game-isolated-icon-png.png'
  const breedLogoUrl = 'https://st4.depositphotos.com/19289694/23725/v/450/depositphotos_237258288-stock-illustration-vector-illustration-set-icons-cartoon.jpg'

  return (
    <nav className="navbar" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

      <ul className="navbar-nav" style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 0, padding: 0}}>
        <li className="nav-item" style={{margin: "0 1px", textAlign: "center"}}>
        <NavLink to="/">
          <img
          style={{width: 145}}
          src={logoUrl}
          alt="Logo"
          />
          <div>Home</div>
        </NavLink>
        </li>

        <li className="nav-item" style={{margin: "0 10px", textAlign: "center"}}>
          <NavLink to="/breeds" >
            <img
            style={{width: 110}}
            src={breedLogoUrl}
            alt="Breeds" />
            <div>Breeds</div>
        </NavLink>
        </li>

        <li className="nav-item" style={{margin: "0 20px", textAlign: "center"}}>
           <img
            style={{width: 145}}
            src={searchLogoUrl}
            alt="Search"
            onClick={toggleSearch}/>
            <div>Hide/Show Search</div>
        </li>

        <li className="nav-item" style={{margin: "0 15px", textAlign: "center"}}>
            <img
            style={{width: 110}}
            src={filterLogoUrl}
            alt="Filter"
            onClick={toggleFilter}/>
            <div>Hide/Show Filter</div>
        </li>

        <li className="nav-item" style={{margin: "0 10px", textAlign: "center"}}>
          <NavLink to="/favorites" >
            <img
            style={{width: 110}}
            src={favoriteLogoUrl}
            alt="Favorites" />
            <div>Favorites</div>
        </NavLink>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
