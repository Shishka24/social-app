import styled from "styled-components";


const Post=(props)=>{
    return (
     <div>
      <Img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
      alt="avatarLogo"/>
      {props.message}
    </div>
    )
}
export default Post; 

const Img=styled.img`
    width: 40px;
    height:40px;
    border-radius:30px;
`;

