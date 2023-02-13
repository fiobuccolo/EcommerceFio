import React from 'react';
import { Link } from 'react-router-dom';
export const Sections = () => {
    return (
        <>
        <li className="navbar-nav">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/'}>Sobre nosotros</Link>
            <Link className='nav-link' to={'/'}>Contacto</Link>
            
        </li>
    </>
    );
}
