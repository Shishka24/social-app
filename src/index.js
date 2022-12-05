import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./redux/App";
import "./index.css";
import store from "./redux/state";
//importing the function from the redux,to import the function need to use {}
// import { addPost } from "./redux/state";

//import state and use it as a props
//send a function addPost as a props

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderTree = (state) => {
  root.render(
    <StrictMode>
      <App state={state} store={store} dispatch={store.dispatch.bind(store)} />
    </StrictMode>
  );
};

// );
rerenderTree(store.getState());
store.subscribe(rerenderTree);
//Важный урок перерисовка данных
//bind привязывает фунции значение оригинального обьяекта важно для OPP
//так как значение обьекта теряется при его передаче особенно при колбек функиях
