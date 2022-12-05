import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPosts from "./MyPosts/MyPosts";


const Profile=(props)=>{
    return (
      <MainDiv>
        <InfoProfile/>
        <MyPosts 
        store={props.store}
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        //sending the function as a props
        dispatch={props.dispatch}
        />
    </MainDiv>
    )
}
export default Profile;


const MainDiv=styled.div`
  
`