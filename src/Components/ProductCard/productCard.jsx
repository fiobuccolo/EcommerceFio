import React from 'react';
import { Counter } from '../Counter/Counter';
import { Link } from 'react-router-dom';
export const ProductCard = ({product}) => {
    return (
        <div className="mb-3 productCard">
        <img src={`/img/${product.img}`} className="card-img-top cardImg" alt={`imagen de ${product.nombre} `} />
        <div className="card-body cardBody">
            <h5 className="card-title">{product.nombre} {}</h5>
            <p className="card-text">{product.precio}</p>
            <p className="card-text">{product.id}</p>
            <Counter valInicial={1} stock={product.stock}/>
            <button className='btn btn-dark'>Agregar al carrito</button>
            
            <Link className='nav-link' to={`/product/${product.id}`}><button className='btn btn-dark'>Ver detalle</button></Link>
        </div>
    </div>     
    );
}

