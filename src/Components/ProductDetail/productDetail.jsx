import React from 'react';
import { Counter } from '../Counter/Counter';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

export const ProductDetail = ({prod}) => {
    const {addProduct} = useCartContext()
    const onAdd = (cantidad) => {
        // console.log(cantidad)
        console.log(`hola ${prod}`)
        addProduct(prod,cantidad)
}
    
    return (
            <div className="mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={prod.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{prod.name}</h5>
                        <p className="card-text">{prod.Quantity}</p>
                        <p className="card-text"> {new Intl.NumberFormat('de-De').format(prod.Price)}</p>
                        <p className="card-text">{prod.Stock}</p>
                        <Counter valInicial={1} stock={prod.Stock} onAdd={onAdd} />
                        <Link className='nav-link' to={"/cart"}><button className='btn btn-primary'>FInalizar compra</button></Link>
                    </div>
                    </div>
                </div>
                </div>
    
    );
}


