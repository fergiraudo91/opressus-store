import React, { useContext } from 'react';
import { CartContext } from '../components/context/CartContext';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const handleDelete = (id) => {
        const filteredItems = cart.filter(item => item.id !== id);
        if(filteredItems.length === 0){
            setCart([{}]);
        }
        else{
            setCart(filteredItems);
        }
    }
    const clear = () => {
        setCart([{}]);
    }
    let prices = cart.map(el => +el.prices);
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
                           return <li key={el.id}>Item: {el.title} cantidad: {el.quantity} Precio: ${el.prices} <DeleteIcon  onClick={() => handleDelete(el.id)}/></li>
                       })
                   }
               </ul>
               <button 
               className="btn btn-danger"
               onClick={clear}
               >Eliminar todo</button> <button className="btn">Comprar</button>
                <div className="total">
                   <h4>Total: ${prices.reduce((prev, next) => prev + next)}</h4>
                </div>
               </div>
              
               )
               :
               <div>
               <h2>Carrito Vacío</h2>
               <Link to="/"><button className="btn">Volver a la tienda</button></Link>
               </div>
           }
        </div>
    )
}
