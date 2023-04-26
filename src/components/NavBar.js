import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({toggleSearch, toggleFilter}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navLinkStyles = {
    textDecoration: 'none',
    color: 'black'
  };

  const logoUrl = 'https://media.istockphoto.com/id/1097490360/vector/vector-illustration-of-cute-black-cat.jpg?s=612x612&w=0&k=20&c=Ef0qYl79aZJ6NJXJVbJ0onjXVNnSyqrN_TKPjieAIGE='
  const searchLogoUrl = 'https://cdn.dribbble.com/users/722835/screenshots/6895075/cat.png?compress=1&resize=400x300&vertical=top'
  const filterLogoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXYbh2t1iw2HknAjD7wd1cECpZyS3zH6VJJA&usqp=CAU'
  const favoriteLogoUrl = 'https://i.pinimg.com/originals/89/b6/63/89b663ce2ad41e86c45c0e4443fbcf78.jpg'
  const breedLogoUrl = 'https://i.pinimg.com/736x/3b/39/e0/3b39e012535d37820fbbd14bc8d58616.jpg'

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
  }

  return (
    <nav className={`navbar ${isDarkMode ? 'navbar-dark' : 'navbar-light'}`} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

      <ul className="navbar-nav" style={{display: "flex", justifyContent: "center", alignItems: "center", margin: 0, padding: 0}}>
        <li className="nav-item" style={{margin: "0 20px", textAlign: "center"}}>
        <NavLink to="/" exact className = "nav-link" activeClassName = "active" style = {navLinkStyles}>
          <img
          style={{width: 110}}
          src={logoUrl}
          alt="Logo"
          />
          <div>Home</div>
        </NavLink>
        </li>

        <li className="nav-item" style={{margin: "0 10px", textAlign: "center"}}>
          <NavLink to="/breeds" exact className = "nav-link" activeClassName = "active" style = {navLinkStyles}>
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
            onClick={toggleSearch}
          />
          <div style={{color: "black"}}>Hide/Show Search</div>
        </li>

        <li className="nav-item" style={{margin: "0 15px", textAlign: "center"}}>
          <img
            style={{width: 150}}
            src={filterLogoUrl}
            alt="Filter"
            onClick={toggleFilter}
          />
          <div style={{color: "black"}}>Hide/Show Filter</div>
        </li>


        <li className="nav-item" style={{margin: "0 10px", textAlign: "center"}}>
          <NavLink to="/favorites" exact className = "nav-link" activeClassName = "active" style = {navLinkStyles}>
            <img
            style={{width: 140}}
            src={favoriteLogoUrl}
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
