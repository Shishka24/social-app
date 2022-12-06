import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";
import { addActionCreatorPost, updateNewPostActionCreator } from "../../../redux/profileReducer";



const MyPosts=(props)=>{ 
  let state=props.store.getState().profilePage;
  let postElements=state.posts.map(m=>
    <Post message={m.message}   likesCount={m.likesCount}/> )
let newText=state.newPostText;
let addPost=()=>{
  props.store.dispatch(addActionCreatorPost());
}
let onPostChange=(e)=>{
  let text=e.target.value
  props.store.dispatch(updateNewPostActionCreator(text));
}
  return (
      <PostsDiv>
        <h3>My posts</h3>
        <div>
          <div>
          <textarea 
          onChange={onPostChange}
          placeholder="What's Up???"
          value={newText}></textarea>
          </div>
          <div>
          <button onClick={addPost}>Add Post</button>
          </div>
          </div>
          <div>
            {postElements}
        </div>
      </PostsDiv>
    
    )
}

const PostsDiv=styled.div`
  padding:20px;
`;
export default MyPosts;
