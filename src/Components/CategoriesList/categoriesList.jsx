import React from 'react';
import { CategoriesCard } from '../CategoriesCard/categoriesCard';

export const CategoriesList = ({cats}) => {
    return (
        <div>
            {cats.map(item => <CategoriesCard category={item} key={item.id}/>)} 
          
        </div>
    );
}

