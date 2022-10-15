import styled from "styled-components";

const NavBar=()=>{
    return (
      <Nav className="nav">
      <div>
        <A>Profile</A>
      </div>
      <div>
        <A>Messages</A>
      </div>
      <div>
        <A>News</A>
      </div>
      <div>
        <A>Music</A>
      </div>
      <div>
        <A>Settings</A>
      </div>
    </Nav>
    )
}
export default NavBar;


const Nav=styled.div`
    grid-area:h;
  background-color: goldenrod;
`
const A=styled.a`
  color:white;
  cursor: pointer;
  &:active{
    color:blue;
  }
  &:hover{
    color:black;
  }
`