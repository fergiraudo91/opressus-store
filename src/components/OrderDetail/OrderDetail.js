import React from 'react'

export const OrderDetail = ({order, returnHandler, orderID}) => {
    return (
        <div>
          <h2>Order Detail</h2>
          <h6>Order ID: {orderID}</h6>
          <p>Date: {order.date}</p>
          <p>Nombre: {order.name}</p>
          <p>Mail: {order.mail}</p>
          <p>Phone: {order.phone}</p>
          <h6>Items:</h6>
          <ul>
           {
             order.items.map(el => <li key={el.id}>Item: {el.title} precio: {el.prices}</li>)
           }
          </ul>
           <hr />
          <h4 className="mt-3">Total: ${order.total}</h4>
          <button className="btn" onClick={returnHandler}>Volver a comprar</button>
        </div>
    )
}
