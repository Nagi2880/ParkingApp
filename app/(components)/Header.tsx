import React from 'react'
import Navbar from '../(elements)/Navbar'
import Logo from '../(elements)/Logo'

function Header() {
 return (
    <header className="header-container">
        <div className="header-content">    
            <Logo />
            <Navbar />
        </div>
    </header>
)
}

export default Header