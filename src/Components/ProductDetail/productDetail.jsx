import React from 'react';

import { Counter } from '../Counter/Counter';
export const ProductDetail = ({prod}) => {
    return (
            <div className="mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={`../img/${prod.img}`} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">{prod.marca}</p>
                        <p className="card-text">{prod.precio}</p>
                        <p className="card-text">{prod.stock}</p>
                        <Counter valInicial={1} stock={prod.stock}/>
                    </div>
                    </div>
                </div>
                </div>
    
    );
}


