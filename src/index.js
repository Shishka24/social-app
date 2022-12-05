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
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        profilePage={store._state.profilePage}
        dialogs={store._state.dialogsPage.dialogs}
        messages={store._state.dialogsPage.messages}
      />
    </StrictMode>
  );
};

// );
rerenderTree(store.getState());
store.subscribe(rerenderTree);
//Важный урок перерисовка данных
