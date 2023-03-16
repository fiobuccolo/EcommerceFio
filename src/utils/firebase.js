// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection,doc, addDoc, getDocs, getDoc, updateDoc,deleteDoc} from "firebase/firestore";
import { prettyDOM } from "@testing-library/react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// getFirestore: consultar base de datos
// collection para trabajar con colecctiones
// addDoc: crear un nuevo documento

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommercefio.firebaseapp.com",
  projectId: "ecommercefio",
  storageBucket: "ecommercefio.appspot.com",
  messagingSenderId: "857405712270",
  appId: "1:857405712270:web:33bbd98146f7c3a28566df",
  measurementId: "G-3L2P5X5EZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore() // referencia a mi base de datos

// export const CargarBDD = async () =>{
//     const promise = await fetch('./json/products.json')
//     const productos = await promise.json()
//     productos.forEach(async (prod) => {
//         await addDoc(collection(db,"products")),{  // collection lo que hace es si existe mi coleccio lo consulta, si no exise la crea y la consulta.
//         nombre: prod.nombre,
//         marca: prod.nombre
//         //Agregar todos los atributos... 
//         }
//     });
// }

export const getProducts = async () =>{
    const products = await getDocs(collection(db,"products"))
    console.log (products)
   // transformar en objetos simples
    const items = products.docs.map(prod =>{
        return {...prod.data(),id:prod.id }
    })
    console.log (items)
    return (items)
}

export const getProduct = async (id) =>{
    const product = await getDoc(doc(db,"products",id))
    console.log (product)
   // transformar en objetos simples
    const item =  {...product.data(),id:product.id }
    console.log (item)
    return item
    }
 
//info información a actualizar
export const updateProduct =  async(id,info) => {
    await updateDoc(doc(db,"products",id),info)
}

export const deleteProduct = async (id) =>{
    await deleteDoc(doc(db,"products",id))
}

// crear y leeer ordenes de compra

export const createPurchaseOrder = async (cliente,products,precioTotal,fecha) => {
    const PurchaseOrder =  await addDoc(collection(db,"OrdenesCompra"),{
        datosCliente: cliente,
        products: products,
        precioTotal: precioTotal,
        fecha: fecha,
    })
    return PurchaseOrder
}

export const getPurchaseOrder = async (id) => {
    const POrder = await getDoc(doc(db, "ordenesCompra",id))
    const PurchaseOrder =  {...POrder.data(),id:POrder.id }
    console.log (PurchaseOrder)
    return PurchaseOrder
}

