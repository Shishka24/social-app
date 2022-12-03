import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import App from "./redux/App";
import { addPost, updateNewPostText, subscribe } from "./redux/state";
import "./index.css";
import state from "./redux/state";
//importing the function from the redux,to import the function need to use {}
// import { addPost } from "./redux/state";

//import state and use it as a props
//send a function addPost as a props

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderTree = () => {
  root.render(
    <StrictMode>
      <App
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        profilePage={state.profilePage}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
      />
    </StrictMode>
  );
};

// );
rerenderTree(state);
subscribe(rerenderTree);
