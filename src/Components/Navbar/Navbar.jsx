import React from 'react';
import { Cart } from '../Cart/cart';
import { Categorias } from './Categorias/categorias';
import { Sections } from './Sections/Sections';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            
             <div className="container-fluid">
                <Link  className="navbar-brand nav-link" to={'/'}><img src="../logo.png" width="120" height="75" alt="logo" className="d-inline-block align-text-center"/></Link>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Categorias/>
                        <Sections/>
                    </ul>
                    <Cart cantCart={1}/>
                 </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button> 
            </div>
        </nav>
    );
}


