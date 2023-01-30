import React from 'react';

export const Categorias = () => {
    return (
        <>
        <li className="nav-item dropdown">  
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tienda
            </a>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Vinos y espumosos</a></li>
            <li><a className="dropdown-item" href="#">Productos ibéricos</a></li>
            {/* <li><hr className="dropdown-divider" /></li> */}
            <li><a className="dropdown-item" href="#">Caprichos</a></li>
        </ul>
        </li>
        </>
    );
}

// export default Categorias;
