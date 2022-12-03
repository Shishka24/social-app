import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPosts from "./MyPosts/MyPosts";


const Profile=(props)=>{
    return (
      <MainDiv>
        <InfoProfile/>
        <MyPosts 
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        //sending the function as a props
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        />
    </MainDiv>
    )
}
export default Profile;


const MainDiv=styled.div`
  
`