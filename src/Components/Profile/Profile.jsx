import styled from "styled-components";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <MainDiv>
      <InfoProfile profile={props.profile} />
      <MyPostsContainer />
    </MainDiv>
  );
};
export default Profile;

const MainDiv = styled.div``;
