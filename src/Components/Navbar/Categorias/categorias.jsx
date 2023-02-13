import React from 'react';
import  {Link } from 'react-router-dom';
import { CategoriesCard } from '../../CategoriesCard/categoriesCard';
import { CategoriesListContainer } from '../../CategoriesListContainer/CategoriesListContainer';

export const Categorias = (cat) => {

    return (
        <>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tienda
            </a>
        <ul className="dropdown-menu">
            <CategoriesListContainer/>
             {/*<li><Link className="dropdown-item" to={`/category/${cat.name}`}>{`${cat.name} Productos ibéricos`}</Link></li>
            <li><Link className="dropdown-item" to={'/category/2'}>Vinos</Link></li>
            <li><hr className="dropdown-divider" /></li> 
            <li><Link className="dropdown-item" to={'/category/3'}>Caprichos</Link></li>*/}
        </ul>
        </li>

        </>
    );
}


