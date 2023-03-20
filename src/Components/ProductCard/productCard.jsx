import React from 'react';
import { Counter } from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
export const ProductCard = ({product}) => {
    const {addProduct} = useCartContext()
    const onAdd = (cantidad) => {
        // console.log(cantidad)
        // console.log(product)
        addProduct(product,cantidad)
}
    return (
        <div className="mb-3 productCard">
        <img src={product.img} className="card-img-top cardImg" alt={`imagen de ${product.nombre} `} />
        <div className="card-body cardBody">
            <h5 className="cardTittle">{product.name}</h5>
            <h5 className="cardSubtittle">{product.description}</h5>
            <p className="cardPrice">{`$  ${new Intl.NumberFormat('de-De').format(product.Price)}`}</p>
            {/* <p className="cardText">{product.id}</p> */}
            <Counter valInicial={1} stock={product.Stock} onAdd={onAdd} />
            <div className='cardButtons'>
                <button className='btn btn-dark'>Agregar al carrito</button>
                 <Link className='nav-link' to={`/product/${product.id}`}><button className='btn btn-dark'>Ver detalle</button></Link>
            </div>
        </div>
    </div>     
    );
}

