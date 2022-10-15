import styled from "styled-components";

const Profile=()=>{
    return (
      <Content >
      <div>
        <img
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="main"
        />
      </div>
      <div>ava+desc</div>
      <div>
        My posts
        <div>New post</div>
      </div>
      <PostDiv>Post1 </PostDiv>
      <PostDiv>Post2 </PostDiv>
    </Content>
    )
}
export default Profile;


const Content=styled.div`
   grid-area: c;
  background-color: lightsalmon;
`;

const PostDiv=styled.div`
  color:lightblue;
`