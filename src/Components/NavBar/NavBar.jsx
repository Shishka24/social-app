import styled from "styled-components";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <Nav className="nav">
      <div>
        <NavLinkStyled to="/profile">Profile</NavLinkStyled>
      </div>
      <div>
        <NavLinkStyled to="/dialogs">Messages</NavLinkStyled>
      </div>
      <div>
        <NavLinkStyled to="/news">News</NavLinkStyled>
      </div>
      <div>
        <NavLinkStyled to="/">Music</NavLinkStyled>
      </div>
      <div>
        <NavLinkStyled to="/users">Users</NavLinkStyled>
      </div>
      <div>
        <a href="a">Settings</a>
      </div>
    </Nav>
  );
};
export default NavBar;

const Nav = styled.div`
  grid-area: h;
  background-color: goldenrod;
  font-size: 22px;
`;
const NavLinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: white;
  }
  &.active {
    color: white;
  }
`;
