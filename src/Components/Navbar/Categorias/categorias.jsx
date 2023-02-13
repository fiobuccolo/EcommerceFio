import React from 'react';
import { Link } from 'react-router-dom';
export const Categorias = () => {
    return (
        <>
        <li className="nav-item dropdown">  
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tienda
            </a>
        <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/category/1'}>Productos ibéricos</Link></li>
            <li><Link className="dropdown-item" to={'/category/2'}>Vinos</Link></li>
            {/* <li><hr className="dropdown-divider" /></li> */}
            <li><Link className="dropdown-item" to={'/category/3'}>Caprichos</Link></li>
        </ul>
        </li>
        </>
    );
}


