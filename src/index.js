import React from "react";
import ReactDOM from "react-dom/client";
import App from "./redux/App";
import "./index.css";
import store from "./redux/reduxStore";
import { Provider } from "react-redux";
// import { StoreContext, StoreProvider } from "./redux/StoreContext";/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// store.subscribe(rerenderTree);
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderTree(state);
// });

//Важный урок перерисовка данных
//bind привязывает фунции значение оригинального обьяекта важно для OPP
//так как значение обьекта теряется при его передаче особенно при колбек функиях
