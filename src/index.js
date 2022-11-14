import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import Products from './components/Products';

const defaultState = {
  products:
  [
      {
        name: "Apple Iphone 14 Pro",
        color: "Black",
        image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/39dfa0a2bf15a9c6ab34ec268493bd55/3012baa9bc23995289e498d33793b6007a246987cd6e5bd96dbd15aa6cd93c2c.jpg.webp",
        price: "999",
        inCart: "1",
        id: "1",
      },
      {
        name: "Apple MacBook Pro",
        color: "Gray",
        image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/995271bdcb9e629eb56cf1356422b55c/4836fd318384caea0e76d171e8b70c21063892db9498331838b02790640ed9a2.jpg.webp",
        price: "1999",
        inCart: "1",
        id: "2",
      },
      {
        name: "Apple Watch Series 7",
        color: "Black",
        image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/fc4bbded8aa965e9942b4cdda80c1fcb/7b60dd96b4e1b6e3a9f6816356fe6312ca25cd9358ab29ac286ed20fd9eb67d4.jpg.webp",
        price: "499",
        inCart: "1",
        id: "3",
      },
      {
        name: "Apple AirPods Pro",
        color: "White",
        image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/cd67499582e261d4e64c37a5cc374f68/084ade25436662102bfd44e2b0238b6638442b9159cf4cbd35e9801f18271c39.jpg.webp",
        price: "199",
        inCart: "1",
        id: "4",
      },
      {
        name: "Apple Magic Trackpad",
        color: "White",
        image: "https://c.dns-shop.ru/thumb/st1/fit/500/500/bc3764ee06e0b67dc8d36c8dd5c4aba3/972eabbf4b261563256456a8cb358b2e8afa039f682a9018eb9a10a148fda3c7.jpg.webp",
        price: "499",
        inCart: "1",
        id: "5",
      },
      {
        name: "Apple Watch Series 7",
        color: "Black",
        image: "https://c.dns-shop.ru/thumb/st4/fit/500/500/fc4bbded8aa965e9942b4cdda80c1fcb/7b60dd96b4e1b6e3a9f6816356fe6312ca25cd9358ab29ac286ed20fd9eb67d4.jpg.webp",
        price: "499",
        inCart: "1",
        id: "6",
      },
  ],
  cartProducts: [],

}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return {...state, cartProducts:[...state.cartProducts,action.payload]}

    case "REMOVE_FROM_CART":
      return{...state, cartProducts: state.cartProducts.filter((el)=>el.id !== action.payload)}

    case "INCREMENT_PRODUCT":
      return {
        ...state,
        cartProducts:state.cartProducts.map((item) => {
          if(item.id === action.payload.id) {
            item.inCart = Number(action.payload.increment) + Number(item.inCart)
          }
          return item
        })
      }

      case "DECREMENT_PRODUCT":
      return {
        ...state,
        cartProducts:state.cartProducts.map((item) => {
          if(item.id === action.payload.id) {
            item.inCart -= action.payload.increment
          }
          return item
        })
      }


    default:
      return state
  }
}

const store = createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);