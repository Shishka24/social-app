import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPosts from "./MyPosts/MyPosts";


const Profile=()=>{
    return (
      <MainDiv>
        <InfoProfile/>
        <MyPosts/>
    </MainDiv>
    )
}
export default Profile;


const MainDiv=styled.div`
  
  
`