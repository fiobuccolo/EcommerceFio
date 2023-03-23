import React from 'react';
import { CartWidget } from '../CartWidget/cartWidget';
import { Categorias } from './Categorias/categorias';
import { Sections } from './Sections/Sections';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
                <nav className="navbar navbar-expand-lg  nav-bar fixed-top ">   
                    <div className="container-fluid">
                        <Link  className="navbar-brand nav-link" to={'/'}><img src="https://firebasestorage.googleapis.com/v0/b/ecommercefio.appspot.com/o/logo.png?alt=media&token=515fa951-31f7-4899-aba7-4db2d776ff9a" width="72" height="64" alt="logo" className="d-inline-block align-text-center"/></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <Categorias/>
                                <Sections/> 
                            </ul>
                            <CartWidget/>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button> 
                    </div>
                </nav>
                

        
    );
}


