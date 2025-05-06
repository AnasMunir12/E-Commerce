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
};
 
const itemSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.products?.push(action.payload);
    },
    addToProduct: (state, action) => {

      // check if already item exist
   // Ensure cartItems exists and is an array
   if (!Array.isArray(state.cartItems)) {
    state.cartItems = [];
  }

  // Then find the existing item
  const existingItem = state.cartItems.find(
    item => item.id === action.payload.id
  );

      if (existingItem) {
        // if exist , so it willl increase quantity
        existingItem.quantity += 1;
      } else {
        // if new, add to cart 
        state.cartItems.push({ ...action.payload, quantity: 1,
            // Ensure required fields exist
            id: action.payload.id || Date.now().toString(),
            name: action.payload.name || 'Unnamed Product',
            price: action.payload.price || 0,
            image: action.payload.image || ''
        });
      }
     },
    //  Update Action
    UpdateQuantity: (state , action) => {
      const { id , quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if(item){
        item.quantity= quantity;
      }
    },
    RemovefromCart: (state , action ) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter ((item) => item.id   !== id );
    },

    signup: (state, action) => {
      // Ensure registerusers array exists
      if (!Array.isArray(state.registerusers)) {
        state.registerusers = [];
      }
      
      const { email, password } = action.payload;
      
      // Check if user already exists
      const isAlreadyRegistered = state.registerusers.some(
        user => user.email === email || user.password === password
      );
      
      if (!isAlreadyRegistered) {
        state.registerusers.push(action.payload);
      }
    },

    login: (state, action) => {
      const { email, password } = action.payload;
    
      const userWithEmail = state.registerusers.find(user => user.email === email);
      const userWithPassword = state.registerusers.find(user => user.password === password);
    
      if (userWithEmail && userWithEmail.password === password) {
        state.currentUser = userWithEmail;
        state.isAuthenticated = true;
        state.loginerror = null;
      } else if (!userWithEmail && !userWithPassword) {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.loginerror = "Email and Passowrd ere not correct";
      } else if (!userWithEmail && userWithPassword) {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.loginerror = "Email is not correct";
      } else if (userWithEmail && userWithEmail.password !== password) {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.loginerror = "Password is not correct";
        
      } else {
        state.currentUser = null;
        state.isAuthenticated = false;
        state.loginerror = "Invalid email or password";
      }
    },
    
    logout: (state) => {
      state.currentUser = null ;
      state.isAuthenticated = false;
    }
    
  },
});

export const { addItem, addToProduct , UpdateQuantity , RemovefromCart, signup, login , logout} = itemSlice.actions;
export default itemSlice.reducer;
