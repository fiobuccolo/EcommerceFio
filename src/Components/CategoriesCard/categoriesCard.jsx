import React from 'react';
import { Link } from 'react-router-dom';


export const CategoriesCard = ({category}) => {
    console.log(category)
    return (
        <div>
            <li>
                <Link className="dropdown-item" to={`/category/${category.nombre}`}>{`${category.nombre}`}</Link>
            </li>
        </div>
    );
}


