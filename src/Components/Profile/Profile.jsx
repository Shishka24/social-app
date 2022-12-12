import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile=(props)=>{
    return (
      <MainDiv>
        <InfoProfile/>
        <MyPostsContainer
        store={props.store}
        />
    </MainDiv>
    )
}
export default Profile;


const MainDiv=styled.div`
  
`