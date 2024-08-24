import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";


function Cart() {
  
  const {cartItems, subTotal, total, shipping, tax} = useSelector((state)=>state.cart)

  const dispatch = useDispatch()

  const increment = (id)=>{
    dispatch({
      type: "addToCart",
      payload: {id},
    })
    dispatch({type: "calculatePrice"})
  }

  const decrement = (id)=>{
    dispatch({
      type: "decrement",
      payload: id,
    })
    dispatch({type: "calculatePrice"})
  }

const deleteHandler = (id)=>{
  dispatch({
    type: "deleteHandler",
    payload: id,
  })
  dispatch({type: "calculatePrice"})
}

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i)=>(
            <CartItem 
            imgSrc={i.imgSrc}
            name={i.name}
            price={i.price}
            qty={i.quantity}
            id={i.id}
            key={i.id}
            decrement={decrement}
            increment={increment}
            deleteHandler={deleteHandler}
            />
          ))
        ) : (<h1>Not item in your cart</h1>
        
        )}
      </main>
      <aside>
        <h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2>Total: ${total}</h2>
      </aside>
    </div>
  );
}

const CartItem = ({
  name,
  price,
  imgSrc,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <h3>${price}</h3>
    </article>

    <div className="btns">
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete className="dltbtn" onClick={() => deleteHandler(id)} />
  </div>
);

export default Cart;
