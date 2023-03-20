// PARA consultar en bbdd mis categorias

import React from 'react';
// import { consultarBDD } from '../../utils/funciones';
import { useEffect,useState } from 'react';
import { CategoriesList } from '../CategoriesList/categoriesList';
import { getCategories } from '../../utils/firebase';



export const CategoriesListContainer = () => {
    const [categories,setCategories] = useState([])
    useEffect(() => {
        // consultarBDD('../json/categories.json')
        getCategories().then ( cats=> {
            const categories = CategoriesList({cats})
            setCategories(categories)
        })
    }, []);
    
    return (
        <div>
            {categories}
        </div>
    );
}


