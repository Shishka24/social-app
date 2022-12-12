import React from "react";
import Post from "./Post/Post";
import styled from "styled-components";

const MyPosts=(props)=>{ 
  let postElements=props.post.map(m=>
    <Post message={m.message}   likesCount={m.likesCount} key={m.id}/> )
  let newPostElement=React.createRef();
  let onAddPost=()=>{
    props.addPost();
  }
  let onPostChange=(e)=>{
    let text=e.target.value
    props.updateNewPostText(text);
  }
  return (
      <PostsDiv>
        <h3>My posts</h3>
        <div>
          <div>
          <textarea 
          onChange={onPostChange}
          ref={newPostElement}
          placeholder="What's Up???"
          value={props.newText}></textarea>
          </div>
          <div>
          <button onClick={onAddPost}>Add Post</button>
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
