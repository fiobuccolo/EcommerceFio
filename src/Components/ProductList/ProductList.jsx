import React from 'react';
import { ProductCard } from '../ProductCard/productCard';
// recibe una array: products y lo tengo que transformar con map a un jsx. 
export const ProductList = ({prods}) => {
    return (
        /*  por cada objeto en mi array  los transformo en un componente product card*/
        <>
            {prods.map(item => <ProductCard product={item} key={item.id}/>)}  
        </>
    );
}


