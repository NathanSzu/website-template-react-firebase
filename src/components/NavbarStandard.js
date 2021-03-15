import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavbarStandard() {
    const location = useLocation();
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>Navbar</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                    <Link className={location.pathname === '/' ? 'nav-item nav-link active' : 'nav-item nav-link'} to='/'>Home</Link>
                    <Link className={location.pathname === '/shop-online' ? 'nav-item nav-link active' : 'nav-item nav-link'} to='/shop-online'>Shop</Link>
                </div>
            </div>
        </nav>
    )
}
