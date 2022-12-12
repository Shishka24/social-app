import React from "react";
import { addActionCreatorPost, updateNewPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer=(props)=>{ 
  let state=props.store.getState();
let addPost=()=>{
  props.store.dispatch(addActionCreatorPost());
}
let onPostChange=(text)=>{
  let action=updateNewPostActionCreator(text)
  props.store.dispatch(action);
}
  return (
      <MyPosts
      post={state.profilePage.posts}
      addPost={addPost}
      updateNewPostText={onPostChange}
      newText={state.profilePage.newPostText}
      />
    
    )
}


export default MyPostsContainer;
