import React, { useContext, useState } from 'react';
import { CartContext } from '../components/context/CartContext';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import './Cart.css';
import { BuyForm } from '../components/BuyForm/BuyForm';

export const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    const [form, setForm] = useState(false);

    const handleDelete = (id) => {
        const filteredItems = cart.filter(item => item.id !== id);
        if(filteredItems.length === 0){
            setCart([{}]);
            setForm(false);
        }
        else{
            setCart(filteredItems);
        }
    }
    const clear = () => {
        setCart([{}]);
        setForm(false);
    }

    const buyFormHandler = () => {
        setForm(true);
    }
    let prices = cart.map(el => +el.prices);
    return (
        <div className="container mt-5">
           <h1>Cart</h1> 
           <hr />
           {form ? <BuyForm prices={prices}/> :
           
               Object.keys(cart[0]).length > 0 ?
               (
               <div>
               <ul className="item-container">
                   {
                       cart.map(el =>{
                           return (<li 
                            key={el.id}> 
                            <div className="item-info">Item: {el.title} cantidad: {el.quantity} Precio: ${el.prices}</div> 
                            <div className="delete-btn"><DeleteIcon  
                            onClick={() => handleDelete(el.id)} 
                            className="delete-icon"/></div>
                            </li>)
                       })
                   }
               </ul>
               <button 
               className="btn btn-danger mr-3"
               onClick={clear}
               >Eliminar todo</button> 
               <button 
               className="btn"
               onClick={buyFormHandler}
               >Comprar</button>
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
