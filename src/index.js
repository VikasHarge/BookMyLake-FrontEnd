import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import ScrollToTop from "./utility/ScrollToTop";
import { photoObj, imgArr } from './components/context/PhotoContext'
import { photoContext } from './components/context/PhotoContext'

const root = ReactDOM.createRoot(document.getElementById("root"));

// let persistor = persistStore(store)

root.render(
  <Provider store={store}>
    <photoContext.Provider value={{ photoObj, imgArr }}>
      <BrowserRouter>
        <ScrollToTop />
        {/* <PersistGate persistor={persistor} > */}
        <App />
        {/* </PersistGate> */}
      </BrowserRouter>
    </photoContext.Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
