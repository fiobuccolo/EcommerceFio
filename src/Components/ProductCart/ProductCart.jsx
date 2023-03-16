import React from 'react';
import { useCartContext } from '../../Context/CartContext';

export const ProductCart = ({product}) => {
    const {removeProduct} = useCartContext()
    return (
        <div className='card mb-3 cardCart'>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={product.img} alt={`Imagen de ${product.nombre}`} className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.nombre}</h5>
                        <p className='card-text'>Cantidad: {product.cantidad}</p>
                        <p className='card-text'>Precio Unitario: $ {new Intl.NumberFormat('de-De').format(product.precio)}</p>
                        <p className='card-text'>Subtotal: $ {new Intl.NumberFormat('de-De').format(product.precio*product.cantidad)}</p>
                        <button className='btn btn-danger' onClick={()=> removeProduct(product.id)}>Eliminar del carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


