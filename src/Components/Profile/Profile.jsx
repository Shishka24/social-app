import styled from "styled-components";
import MyPosts from "./MyPosts/MyPosts";

const Profile=()=>{
    return (
      <div>
      <div>
        <Img
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="main"
        />
      </div>
      <div>ava+desc</div>
     <MyPosts/>
    </div>
    )
}
export default Profile;


const Img=styled.img`
    width: 700px;
`;