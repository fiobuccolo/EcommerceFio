// Consulto mi array de productos y hago un filtro para quedarme unicamente con el producto que quiero ver
import React from 'react';
import { useState,useEffect } from 'react';
//import { getProduct } from '../../utils/firebase';
import { consultarBDD } from '../../utils/funciones';
import { ProductDetail } from '../ProductDetail/productDetail';
import { useParams } from 'react-router-dom';
export const ProductDetailContainer = () => {
   const [product, setProduct] = useState([])
   const {id} = useParams()
    useEffect(() => {
       //COnsulto a la base de datos para traer el listado de productos
       // tengo que cambiar consultar bdd por getproduct(id) y no haria falta el find... 
       consultarBDD('../json/products.json')

       // espero y luego filtro para obtener el detalle de producto que quiero
        .then (prods => {
        const prod = prods.find(item => item.id === parseInt(id))
       
        setProduct(prod)
       
       })
    }, []);
    
    return (
        <div className='card mb-3 container productDetail'>
            <ProductDetail prod={product}/>
        </div>
    );
}


