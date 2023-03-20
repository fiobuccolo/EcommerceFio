
import React from 'react';
// import { consultarBDD } from '../../utils/funciones';
//import { getProducts } from '../../utils/firebase';
import { useEffect, useState } from 'react';
import { ProductList } from '../ProductList/ProductList';
import { useParams } from 'react-router-dom'; // consultar los parametos que vienen de la app
import { getProducts } from '../../utils/firebase';

// CONSULTA A LA BASE DE DATOS
export const ProductListContainer = () => {
    const [productos,setProductos] = useState([])
    const {idCategory} = useParams()
    // use efect para funciones asincronas
//    console.log(idCategory)
    useEffect(() => {
        if (idCategory){
            //tengo que cambiar  consultar bdd por getProducts()
        // consultarBDD('../json/products.json')
        getProducts()
            // Cada producto lo envie a itemLIst
        .then ( items =>{
            
            const prods = items.filter(prod=>prod.Stock >0).filter(prod => prod.category === idCategory)
            const products = <ProductList prods={prods} plantilla="ProductCard"/>
            setProductos(products)
        } )
      }else{ 
         //tengo que cambiar  consultar bdd por getProducts()
        // consultarBDD('./json/products.json')
        getProducts()
            // Cada producto lo envie a itemLIst
        .then ( items =>{
            const prods = items.filter(prod=>prod.Stock >0)
            const products = <ProductList prods={prods} plantilla="ProductCard"/>
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


