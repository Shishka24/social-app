import styled from "styled-components";
<<<<<<< HEAD:src/Components/Profile.jsx

const Profile=()=>{
    return (
      <Content >
=======
import MyPosts from "./MyPosts/MyPosts";

const Profile=()=>{
    return (
>>>>>>> origin/surfaceBranch:src/Components/Profile/Profile.jsx
      <div>
      <div>
        <Img
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="main"
        />
      </div>
      <div>ava+desc</div>
<<<<<<< HEAD:src/Components/Profile.jsx
      <div>
        My posts
        <div>New post</div>
      </div>
      <PostDiv>Post1 </PostDiv>
      <PostDiv>Post2 </PostDiv>
    </Content>
=======
     <MyPosts/>
    </div>
>>>>>>> origin/surfaceBranch:src/Components/Profile/Profile.jsx
    )
}
export default Profile;


<<<<<<< HEAD:src/Components/Profile.jsx
const Content=styled.div`
   grid-area: c;
  background-color: lightsalmon;
`;

const PostDiv=styled.div`
  color:lightblue;
`
=======
const Img=styled.img`
    width: 700px;
`;
>>>>>>> origin/surfaceBranch:src/Components/Profile/Profile.jsx
