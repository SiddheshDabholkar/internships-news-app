import { useContext } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Context } from "../App";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 45px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  @media (min-width: 601px) {
    display: none;
  }
`;

export default function Navbar() {
  const { state, dispatch } = useContext(Context);
  const handleClick = () => {
    dispatch({ type: "navbar", payload: !state.navbar });
  };
  return (
    <>
      <NavbarContainer>
        <GiHamburgerMenu style={{ padding: "15px" }} onClick={handleClick} />
      </NavbarContainer>
    </>
  );
}
