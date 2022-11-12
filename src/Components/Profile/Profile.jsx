import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPosts from "./MyPosts/MyPosts";


const Profile=(props)=>{
    return (
      <MainDiv>
        <InfoProfile/>
        <MyPosts 
        post={props.post}
        //sending the function as a props
        addPost={props.addPost}/>
    </MainDiv>
    )
}
export default Profile;


const MainDiv=styled.div`
  
`