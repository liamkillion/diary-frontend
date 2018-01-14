import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import "./index.css";
import App from "./App";

const rootReducer = combineReducers({
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
// registerServiceWorker();
