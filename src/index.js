import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import store from "../src/Redux/Store/Store";
// import axios from 'axios'
import { createRoot } from 'react-dom/client';

const container = document.getElementById("root")
const root = createRoot(container)

//  axios.defaults.baseURL = 'http://localhost:3001';
//  axios.defaults.baseURL = 'https://videogames-back-end-production.up.railway.app/';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
