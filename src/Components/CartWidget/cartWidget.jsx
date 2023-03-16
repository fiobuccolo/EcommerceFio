import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
export const CartWidget = () => {
    const {getProductQuantity} = useCartContext()
    return (
        <>
            <Link className='nav-link' to={"/cart"}>
            <button className='cart-icon'>
               <AiOutlineShoppingCart />
                  {getProductQuantity() > 0 && <span className='cart-item-qty'>{getProductQuantity()}</span>}
            </button>
            </Link>
        </>
        
    );
}

