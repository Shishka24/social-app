import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import state from "./redux/state";
//importing the function from the redux,to import the function need to use {}

import { addPost } from "./redux/state";

//import state and use it as a props
//send a function addPost as a props
let rerenderTree = () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <App
      addPost={addPost}
      posts={state.profilePage.posts}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
    />
  );
};

rerenderTree();
