import styled from "styled-components";

const Header=()=>{
    return (
        <Title >
        <Img
          src="https://flomaster.club/uploads/posts/2022-07/1657373515_10-flomaster-club-p-sosnovaya-shishka-risunok-krasivo-12.jpg"
          alt="logo"
        />
      </Title>
    )
}
export default Header;


const Title=styled.div`
  grid-area:a;
  background-color: grey;
  

`

const Img=styled.img`
    width: 60px;
`;