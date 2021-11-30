import * as React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {
    return (
        <nav>
        <ul className="nav-links">
        <li className="nav-link-item">
            <Link to="/" className="nav-link-text">
            <p class="hover:text-white">Home</p>
            </Link>
        </li>
        </ul>
        </nav>

    )
}

export default NavBar


