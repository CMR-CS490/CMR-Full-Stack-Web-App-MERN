import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension'

import reducers from "./reducers";

import "./index.css";
import "typeface-roboto";
import App from "./App";

// Global Store for component's states.
const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()));

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);
