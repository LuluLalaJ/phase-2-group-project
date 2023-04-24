import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <div>
            <NavLink exact to="/">
                Home/Logo
            </NavLink>

        </div>
    )
}

export default NavBar;
