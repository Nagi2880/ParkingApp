import React from 'react'
import Button from '../(elements)/button'
const Navbar = () => {
    return (
            <nav className="navbar-container">
                <ul className="navbar">
                    <li>
                        <Button href="/" className="nav-button">
                            Home
                        </Button>
                    </li>
                    <li>
                        <Button href="/about" className="nav-button">
                            About
                        </Button>
                        <Button href="/parker" className="nav-button">
                            Be parker
                        </Button>
                    </li>
                    <li>
                        <Button href="/owner" className="nav-button">
                            Be Owner
                        </Button>
                    </li>
                </ul>
            </nav>
    )
}

export default Navbar