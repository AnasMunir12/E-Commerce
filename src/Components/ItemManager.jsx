import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addToProduct , UpdateQuantity} from '../Components/Utils/itemSlice';

const ItemManager = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  
  // Access both products and cartItems from state
  const products = useSelector((state) => state.items.products);
  const cartItems = useSelector((state) => state.items.cartItems);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      // Dispatch addItem with the input value
      dispatch(addItem(input));
      
      // Dispatch addToProduct with proper product object
      dispatch(addToProduct({
        id: Date.now().toString(), // Generate unique ID
        name: input,
        price: Math.floor(Math.random() * 100) + 1, // Random price for example
        image: '' // You might want to add an image URL here
      }));
      
      setInput('');
    }
  };

  return (
    <div>
      <h2>Item Manager</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <h3>Stored Products:</h3>
      <ul>
        {products?.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

      <h3>Cart Items:</h3>
      <ul>
        {cartItems?.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} (Qty: {item.quantity || 1})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemManager;