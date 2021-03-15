import React from 'react'
import { Link, useLocation } from "react-router-dom"

export default function NavbarStandard() {
    return (
        <nav className='nav'>
            <div className='nav-logo-wrapper'>

            </div>
            <div className='nav-link-wrapper'>
                <Link to='/'>Home</Link>
                <Link to='/shop-online'>Shop</Link>
                <button className='nav-link'>Contact</button>
            </div>
        </nav>
    )
}
