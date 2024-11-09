import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart, decreaseQuantity } from '../features/Slice/CartSlice';
import { MdDelete } from "react-icons/md";

function Cart() {
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Your Cart</h2>
      {cartData && cartData.length > 0 ? (
        cartData.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <div className='flex items-center'>
              {/* Decrease Quantity Button */}
              <button onClick={() => dispatch(decreaseQuantity(item.id))} style={{ marginRight: '10px' }}>
                -
              </button>

              {/* Display Quantity */}
              <p>Quantity: {item.quantity}</p>

              {/* Increase Quantity Button */}
              <button onClick={() => dispatch(addToCart(item))} style={{ marginLeft: '10px' }}>
                +
              </button>

              {/* Remove Item Button */}
              <MdDelete className='text-red-500 ml-4' onClick={() => dispatch(removeFromCart(item.id))} />
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      {cartData.length > 0 && (
        <button onClick={() => dispatch(clearCart())} style={{ marginTop: '20px' }}>
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;
