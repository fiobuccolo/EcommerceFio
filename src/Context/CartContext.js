import { useContext,createContext,useState } from "react";

const CartContext = createContext()

export const useCartContext = () =>  useContext(CartContext)

export const CartProvider = (props)=> {
    const [cart, setCart] = useState([])
   
    // Si existe producto en el carrito?
    const isIncart = (id) => {
            // si existe el producto lo retorna, si no existe retorna undefined
            return cart.find (prod => prod.id === id)
    }

    // agregar producto
    const addProduct = (product,cantidad) =>{
        // si existe modifico las cantidades:
        if(isIncart(product.id)){
                const indice = cart.findIndex(prod=> prod.id === prod.id)
                const aux = [...cart] // creo un auxiliar porque voy a tener que modificar el cart
                aux[indice].cantidad = cantidad //cambio las cantidades que habia del producto y las seteo con las nuevas. (Estoy pisando el valor anterior y no sumando)
                setCart(aux) // seteo el carrito con la nuevas cnatidades de ese prodcuto
        }else{
            // si no existe en el carrito, lo creo. 
            const prodCart = {
                ...product,  // operador spread: copia de objeto
                cantidad: cantidad
            }
            setCart ([...cart,prodCart]) // copio lo que habia en el cart y le agrego el producto agregado
        }
    }

    // eliminar producto del carrito. 
    
    const removeProduct = (id) => {
        setCart(cart.filter(product=> product.id !== id))
         // const indice = cart. findIndex(prod => prod.id === id)
        // cart.splice(indice,1)
    }

    // vaciar carrito 

    const emptyCart = () =>{
        setCart([])
    }

    // cantidad total de productos en el carrito

    const getProductQuantity =  () => {
        // return cart.length
         return cart.reduce((acum, product) => acum += product.cantidad,0)
    }

    // Precio total de la compra

    const totalPrice =  () => {
        // return cart.length
        return cart.reduce((acum, product) => acum+= (product.cantidad*product.Price),0)
    }
    // console.log(cart)
    return (
        <CartContext.Provider value={{cart,addProduct,removeProduct,emptyCart,getProductQuantity,totalPrice}}>
            {props.children}  
        </CartContext.Provider>
    )
  
}