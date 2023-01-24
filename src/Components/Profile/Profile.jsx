import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile=()=>{
    return (
      <MainDiv>
        <InfoProfile/>
        <MyPostsContainer/>
    </MainDiv>
    )
}
export default Profile;


const MainDiv=styled.div`
  
`