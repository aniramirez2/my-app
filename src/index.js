import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import store from "./components/redux/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <Provider store={store}> 
    <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>        
    </ChakraProvider> 
  </Provider>
);


