import Post from "./Post/Post";
import styled from "styled-components";

const MyPosts=(props)=>{ 
  let postElements=props.post.map(m=><Post message={m.message} likesCount={m.likesCount}/> )

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
            {postElements}
        </div>
      </PostsDiv>
    
    )
}

const PostsDiv=styled.div`
  padding:20px;
`;
export default MyPosts;
