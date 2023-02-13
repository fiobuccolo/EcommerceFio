
import React from 'react';
import { consultarBDD } from '../../utils/funciones';
import { useEffect, useState } from 'react';
import { ProductList } from '../ProductList/ProductList';
import { useParams } from 'react-router-dom'; // consultar los parametos que vienen de la app

// CONSULTA A LA BASE DE DATOS
export const ProductListContainer = () => {
    const [productos,setProductos] = useState([])
    const {idCategory} = useParams()
    // use efect para funciones asincronas
    useEffect(() => {
      if (idCategory){
        consultarBDD('../json/products.json')
            // Cada producto lo envie a itemLIst
        .then ( items =>{
            const prods = items.filter(prod => prod.idCategoria === parseInt(idCategory))
            const products = ProductList({prods})
            setProductos(products)
        } )
      }else{ 
        consultarBDD('./json/products.json')
            // Cada producto lo envie a itemLIst
        .then ( prods =>{
            const products = ProductList({prods})
            setProductos(products)
        })
            }
    }, [idCategory]);
    return (
        <div className='row cardProductos'>
           {productos}
        </div>
    );
}


