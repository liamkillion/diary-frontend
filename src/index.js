import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user_reducer";
import "./index.css";
import App from "./App";

const rootReducer = combineReducers({ userReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
// registerServiceWorker();
