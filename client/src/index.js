import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import rootReducer from "./store/reducers/root-reducer";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// Check for token and update app state if required
const token = localStorage.getItem("token");

if (token) {
  store.dispatch({ type: "LOGGED_IN" });
}

ReactDOM.render(
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Provider>,
  document.getElementById('root')
);