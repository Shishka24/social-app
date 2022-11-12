import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPosts from "./MyPosts/MyPosts";


const Profile=(props)=>{
    return (
      <MainDiv>
        <InfoProfile/>
        <MyPosts post={props.post}/>
    </MainDiv>
    )
}
export default Profile;


const MainDiv=styled.div`
  
`