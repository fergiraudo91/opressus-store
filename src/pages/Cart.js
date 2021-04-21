import React, { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';
import DeleteIcon from '@material-ui/icons/Delete';

export const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const handleDelete = (id) => {
        const filteredItems = cart.filter(item => item.id !== id);
        setCart(filteredItems);
    }
    const clear = () => {
        setCart([{}]);
    }
    
    return (
        <div className="container mt-5">
           <h1>Cart</h1> 
           <hr />
           {
               Object.keys(cart[0]).length > 0 ?
               (
               <div>
               <ul>
                   {
                       cart.map(el =>{
                           return <li key={el.id}>Item: {el.title} cantidad: {el.quantity} Precio: {el.prices} <DeleteIcon  onClick={() => handleDelete(el.id)}/></li>
                       })
                   }
               </ul>
               <button 
               className="btn btn-danger"
               onClick={clear}
               >Eliminar todo</button> <button className="btn">Comprar</button>
               </div>
               )
               
               :
               <h2>Carrito Vacío</h2>
           }
        </div>
    )
}
