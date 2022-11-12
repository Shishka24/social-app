import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";

const MyPosts=(props)=>{ 
  let postElements=props.post.map(
    m=><Post message={m.message} likesCount={m.likesCount}/> )
//creating a Ref 
let newPostElement=React.createRef();
//function addPost  used the current value from the textArea 
let addPost=()=>{
  let text=newPostElement.current.value;
  props.addPost(text);
}
  return (
      <PostsDiv>
        <h3>My posts</h3>
        <div>
          <div>
          <textarea ref={newPostElement}></textarea>
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
