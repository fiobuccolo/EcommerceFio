import React from 'react';
import { Link } from 'react-router-dom';
import { ProductList } from '../ProductList/ProductList';
import { useCartContext } from '../../Context/CartContext';

export const Cart = () => {
    const {cart,emptyCart,totalPrice} = useCartContext()
    
    const conditional =  false
          
    return(
        <>
            {
            cart.length === 0 ?   
                    <>
                        <h2 className='cart'>no agregaste nada</h2>
                        <Link className='nav-link' to={"/"}><button className='btn btn-primary'>Continuar comprando</button></Link>
                    </>
                :
                    //si existen productos en el carrito:
                    <div className='container cartContainer'>
                        <ProductList prods={cart} plantilla="ProductCart"/>
                        <div className='divButtons'>
                            <p> Resumen de la compra: $ {new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                            <button className='btn btn-danger' onClick={()=> emptyCart()}>Vaciar Carrito</button>
                            <Link className='nav-link' to={"/"}><button className='btn btn-dark'>Continuar comprando</button></Link>
                            <Link className='nav-link' to={"/checkout"}><button className='btn btn-primary'>Finalizar compra</button></Link>
                        </div>
                    </div>
                    
             }
        </>
    )

    }