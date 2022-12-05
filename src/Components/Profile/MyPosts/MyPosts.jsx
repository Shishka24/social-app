import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";
import { addActionCreatorPost, updateNewPostActionCreator } from "../../../redux/state";



const MyPosts=(props)=>{ 
  let state=props.store.getState().profilePage;
  let postElements=state.posts.map(
    m=>
    <Post message={m.message} likesCount={m.likesCount}/> )
//creating a Ref 
let newPostElement=React.createRef();
//function addPost  used the current value from the textArea 
let addPost=()=>{
  props.dispatch(addActionCreatorPost());
}

let onPostChange=()=>{
  let text=newPostElement.current.value;
props.dispatch(updateNewPostActionCreator(text));

}
  return (
      <PostsDiv>
        <h3>My posts</h3>
        <div>
          <div>
          <textarea 
          onChange={onPostChange}
          ref={newPostElement} 
          value={props.newPostText}></textarea>
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
