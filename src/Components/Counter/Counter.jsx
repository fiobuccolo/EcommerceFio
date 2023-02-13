import React from 'react';
import { useState } from 'react'; 
/* 
The useState Hook can be used to keep track of strings,
numbers, booleans, arrays, objects, and any combination of these!
We could create multiple state Hooks to track individual values.*/

export const Counter = ({valInicial,stock}) => {
   
   // const [variable,function that change state] = useState(default value)
    const [contador,setContador] = useState(valInicial)
    //Funciones para sumar y restar
    const sumar = ()=> contador < stock && setContador(contador+1)
    const restar = () => contador > valInicial && setContador(contador-1)
    // console.log(valInicial)
    // console.log(stock)
    // console.log(contador)

    return (    
        <div>
            
            <button className='btn btn-dark' onClick={()=>sumar()}>+</button>
            {contador}
            <button className='btn btn-dark' onClick={()=>restar()}>-</button> 
        </div>
    );
}


