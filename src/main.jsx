import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Components/Utils/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>
  </BrowserRouter>
  </StrictMode>

)
