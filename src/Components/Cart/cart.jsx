import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export const Cart = ({cantCart}) => {
    return (
       
            <button type="button" className='cart-icon' onClick="">
               <AiOutlineShoppingCart />
                <span className='cart-item-qty'>1</span>
            </button>
        
    );
}

// export default Cart;
