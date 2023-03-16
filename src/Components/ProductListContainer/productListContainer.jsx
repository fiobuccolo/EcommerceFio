
import React from 'react';
import { consultarBDD } from '../../utils/funciones';
//import { getProducts } from '../../utils/firebase';
import { useEffect, useState } from 'react';
import { ProductList } from '../ProductList/ProductList';
import { useParams } from 'react-router-dom'; // consultar los parametos que vienen de la app

// CONSULTA A LA BASE DE DATOS
export const ProductListContainer = () => {
    const [productos,setProductos] = useState([])
    const {idCategory} = useParams()
    // use efect para funciones asincronas
   console.log(idCategory)
    useEffect(() => {
        if (idCategory){
            //tengo que cambiar  consultar bdd por getProducts()
        consultarBDD('../json/products.json')
            // Cada producto lo envie a itemLIst
        .then ( items =>{
            
            const prods = items.filter(prod=>prod.stock >0).filter(prod => prod.Categoria === idCategory)
            const products = <ProductList prods={prods} plantilla="ProductCard"/>
            setProductos(products)
        } )
      }else{ 
         //tengo que cambiar  consultar bdd por getProducts()
        consultarBDD('./json/products.json')
            // Cada producto lo envie a itemLIst
        .then ( items =>{
            const prods = items.filter(prod=>prod.stock >0)
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


