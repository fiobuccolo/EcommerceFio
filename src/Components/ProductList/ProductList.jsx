import React from 'react';
import { ProductCard } from '../ProductCard/productCard';
import { ProductCart } from '../ProductCart/ProductCart';
// recibe una array: products y lo tengo que transformar con map a un jsx. 
export const ProductList = ({prods,plantilla}) => {
    return (
        <>
        {
            plantilla === "ProductCard"
            ?
            /* /*  por cada objeto en mi array  los transformo en un componente product card*/
            prods.map(item => <ProductCard product={item} key={item.id}/>) 
             :
             prods.map(item => <ProductCart product={item} key={item.id}/>)
        }
        </>
    );
}


