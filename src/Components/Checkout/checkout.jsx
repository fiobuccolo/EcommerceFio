import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // redirige automaticamente al componente que yo quiera
import { toast } from 'react-toastify';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { createPurchaseOrder,getPurchaseOrder, getProduct , updateProduct} from '../../utils/firebase';
// referencia forma de consultar un elemento una vez que ya se renderizo -
// consulto a ese referencia el estado actual de mi objeto

export const Checkout = () => {
    const {cart,emptyCart, totalPrice} = useCartContext()
    let navigate = useNavigate() // devuelve locación actual de la aplicación

    //consulto referencia
    const datosForm = useRef()

    // e hace referencia al evento que se acaba de ejecutar.. en este caso el onSubmit
    const consultarForm = (e) => {
        // cancelo el comportamiento por defecto
        e.preventDefault()
        // console.log(datosForm)
        // me devuelve el html de form 
        console.log(datosForm.current)
        // generar un objeto con cada uno de los datos del formulario -- Form data js
        // lo transformo en objeto iterable para consultar de forma mas optima sus valores
        const data = new FormData(datosForm.current)
        // console.log (data)
        // console.log (data.get("nombre"))
        // metodo que permite transformar un objeto iterable en un objeto simple
        const cliente = Object.fromEntries(data)
        console.log(cliente)
        if (cliente.email === cliente.repeatEmail){
            const aux = [...cart]
            aux.forEach(prodCart => {
            getProduct(prodCart.id) .then (prodBDD => {
                prodBDD.Stock -= prodCart.cantidad // descontar stock
                updateProduct(prodBDD.id,prodBDD) // mando el id del producto y el producto actualizad
            })
             })

        createPurchaseOrder(cliente,aux, totalPrice(),new Date().toISOString()).then(PurchaseOrder => {
            toast.success(`compra finalizada su orden de compra con el ID:${PurchaseOrder.id} fue realizada con exito por un total de $ ${new Intl.NumberFormat('de-De').format(totalPrice())}`)
        })
        e.target.reset() // reseteo el formulario
        emptyCart() // vacio el carrito
        navigate("/")} else{
            console.log(`hola ${cliente.email}`)
            console.log(`hola 2 ${cliente.repeatEmail}`)
            toast.error("los emails no coinciden")
         }
        }

    return (
        <>
            {cart.length === 0 ? 
            <>
              <h2 className='cart'>no agregaste nada</h2>
                        <Link className='nav-link' to={"/"}><button className='btn btn-primary'>Continuar comprando</button></Link>
            </>
            :
            <div className='container contForm'>
                <form className='needs-validation' onSubmit={consultarForm} ref={datosForm}>
                    <div>
                        <label htmlFor='nombre' className='form-label'>Nombre y Apellido</label>
                        <input type="text" className='form-control' name="nombre" id="" required />
                    </div>
                    <div>
                        <label htmlFor='email' className='form-label'>Correo electronico</label>
                        <input type="email" className='form-control' name="email" id="" required />
                    </div>
                    <div>
                        <label htmlFor='repeatEmail' className='form-label'>Reingresa el Correo electronico</label>
                        <input type="email" className='form-control' name="repeatEmail" id="" required />
                    </div>
                    <div>
                        <label htmlFor='dni' className='form-label'>Documento</label>
                        <input type="number" className='form-control' name="dni" id="" required/>
                    </div>
                    <div>
                        <label htmlFor='telefono' className='form-label'>Telefono</label>
                        <input type="number" className='form-control' name="telefono" id="" required />
                    </div>
                    <div>
                        <label htmlFor='dirección' className='form-label'>Dirección</label>
                        <input type="text" className='form-control' name="direccion" id=""required/>
                    </div>
                    <button type="submit" className='btn btn-primary'>Finalizar compra</button>
                </form>
            </div>
           }
        </>
       
    );
}

