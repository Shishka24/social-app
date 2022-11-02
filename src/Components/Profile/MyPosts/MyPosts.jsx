import Post from "./Post/Post";
import styled from "styled-components";

const MyPosts=()=>{
    return (
      <PostsDiv>
        <h3>My posts</h3>
        <div>
          <div>
          <textarea></textarea>
          </div>
          <div>
          <button>Add Post</button>
          </div>
          </div>
          <div>
        <Post message='Hey World '/>
        <Post message='Hey Jimmy '/>
        <Post/>
        <Post/>
        <Post/>
        </div>
      </PostsDiv>
    
    )
}

const PostsDiv=styled.div`
  padding:20px;
`;
export default MyPosts;
