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
        <li className="nav-link-item">
            <Link to="/about" className="nav-link-text">
            <p class="hover:text-white">About</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link to="/projects" className="nav-link-text">
            <p class="hover:text-white">Projects</p>
            </Link>
        </li>
        <li className="nav-link-item">
            <Link to="/courses" className="nav-link-text">
            <p class="hover:text-white">Courses</p>
            </Link>
        </li>
        </ul>
        </nav>

    )
}

export default NavBar



