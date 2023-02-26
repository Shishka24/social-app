import styled from "styled-components";
import { Preloader } from "../../Preloader/Preloader";

const InfoProfile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <MainDiv>
      <div>
        <Img
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
          alt="main"
        />
      </div>
      <DescDiv>
        <img src={props.profile.photos.large} alt="pic" />
        <h2>{props.profile.aboutMe}</h2>
        <h3>{props.profile.contacts.facebook}</h3>
        ava+desc
      </DescDiv>
    </MainDiv>
  );
};
export default InfoProfile;

const MainDiv = styled.div`
  grid-area: c;
`;
const DescDiv = styled.div`
  padding: 10px;
`;

const Img = styled.img`
  width: 700px;
`;
