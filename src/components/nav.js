import * as React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {

    const colorPrimary="blue"
    const activeStyle = {
        color: "#424f88", 
        fontWeight: "bold"
    };

    return (
        <nav>
        <ul className="nav-links">
            <li className="nav-link-item" role="button">
                <Link to="/" activeStyle={activeStyle}  className="nav-link-text">
                <p>Grid</p>
                </Link>
            </li>
            <li className="nav-link-item">
                <Link to="/listview" activeStyle={activeStyle}  className="nav-link-text">
                <p>List</p>
                </Link>
            </li>
        </ul>
        </nav>

    )
}

export default NavBar



