// src/redux/itemSlice.js
import { Password } from '@mui/icons-material';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],  // ✅ fixed: initialized as an array
  cartItems: [ ] ,
  registerusers : [ ] , 
  currentUser: null ,
  isAuthenticated: false,
  loginerror : null ,
  order: [],
};
 
const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.products?.push(action.payload);
    },
    
   addToProduct: (state, action) => {
      // Validate payload
      if (!action.payload || typeof action.payload !== 'object') {
        console.error('Invalid payload for addToProduct');
        return;
      }

      // Initialize cartItems if not existing
      if (!Array.isArray(state.cartItems)) {
        state.cartItems = [];
      }

      const { id, name, price, image } = action.payload;
      
      // Validate required fields
      if (!id) {
        console.error('Product ID is required');
        return;
      }

      const existingItem = state.cartItems.find(item => item.id === id);

      if (existingItem) {
        // Increment quantity safely
        existingItem.quantity = (existingItem.quantity || 0) + 1;
      } else {
        // Add new item with default values
        state.cartItems.push({
          id,
          name: name || 'Unnamed Product',
          price: Number(price) || 0,
          image: image || '',
          quantity: 1
        });
      }
    },

    UpdateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      
      // Validate input
      if (!id || isNaN(quantity) || quantity < 1) {
        console.error('Invalid quantity update');
        return;
      }

      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(1, Math.floor(quantity)); // Ensure quantity is at least 1
      }
    },

    RemovefromCart: (state, action) => {
      const id = action.payload;
      if (Array.isArray(state.cartItems)) {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }
    },

    // signup: (state, action) => {
    //   // Ensure registerusers array exists
    //   if (!Array.isArray(state.registerusers)) {
    //     state.registerusers = [];
    //   }
      
    //   const { email, password } = action.payload;
      
    //   // Check if user already exists
    //   const isAlreadyRegistered = state.registerusers.some(
    //     user => user.email === email || user.password === password
    //   );
      
    //   if (!isAlreadyRegistered) {
    //     state.registerusers.push(action.payload);
    //   }
    // },

    // login: (state, action) => {
    //   const { email, password } = action.payload;
    
    //   const userWithEmail = state.registerusers.find(user => user.email === email);
    //   const userWithPassword = state.registerusers.find(user => user.password === password);
    
    //   if (userWithEmail && userWithEmail.password === password) {
    //     state.currentUser = userWithEmail;
    //     state.isAuthenticated = true;
    //     state.loginerror = null;
    //   } else if (!userWithEmail && !userWithPassword) {
    //     state.currentUser = null;
    //     state.isAuthenticated = false;
    //     state.loginerror = null;
    //     state.loginerror = "Email and Passowrd ere not correct";
    //   } else if (!userWithEmail && userWithPassword) {
    //     state.currentUser = null;
    //     state.isAuthenticated = false;
    //     state.loginerror = "Email is not correct";
    //   } else if (userWithEmail && userWithEmail.password !== password) {
    //     state.currentUser = null;
    //     state.isAuthenticated = false;
    //     state.loginerror = "Password is not correct";
        
    //   } else {
    //     state.currentUser = null;
    //     state.isAuthenticated = false;
    //     state.loginerror = "Invalid email or password";
    //   }
    // },

      setUser: (state, action) => {
        state.currentUser = action.payload;
      },
    
    logout: (state) => {
      state.currentUser = null ;
       localStorage.removeItem("UserInfo");
    },

    placeOrder: (state, action) => {
      if(state.cartItems.length === 0) return;

      if(!Array.isArray(state.order)) {
        state.order = [];
      }

      const newOrder = {
        id: Date.now().toString(),
        items: [...state.cartItems],
        total: state.cartItems.reduce((sum , item) => sum + (item.price * item.quantity), 0),
        date: new Date().toISOString(),
        status: "Pending",
        shippingInfo: action.payload,
      }

      state.order.push(newOrder);
      state.cartItems = [ ];
    },
    
  },
});

export const { addItem, addToProduct , UpdateQuantity , RemovefromCart, signup, login ,setUser, logout, placeOrder} = itemSlice.actions;
export default itemSlice.reducer;