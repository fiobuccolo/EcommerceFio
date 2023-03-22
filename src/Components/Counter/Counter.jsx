import React from 'react';
import { useState } from 'react'; 
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
/* 
The useState Hook can be used to keep track of strings,
numbers, booleans, arrays, objects, and any combination of these!
We could create multiple state Hooks to track individual values.*/

export const Counter = ({valInicial,stock,onAdd}) => {
   
   // const [variable,function that change state] = useState(default value)
    const [contador,setContador] = useState(valInicial)
    //Funciones para sumar y restar
    const sumar = ()=> contador < stock && setContador(contador+1)
    const restar = () => contador > valInicial && setContador(contador-1)
    // console.log(valInicial)
    // console.log(stock)
    // console.log(contador)

    return (    
        <div className='counter'>
                
                <button className='cardAdd' onClick={()=>restar()}><AiOutlineMinusCircle/></button> 
                {contador}
                <button className='cardAdd' onClick={()=>sumar()}><AiOutlinePlusCircle/></button>
            
       
            <button className='btn btn-add' onClick={()=>{onAdd(contador)}}>Agregar al carrito</button>
            
        </div>
    );
}


