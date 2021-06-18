import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../App";
import Reader from "../SideSectionComponents/Reader";
import ViewToggle from "../SideSectionComponents/ViewToggle";
import Feedback from "../SideSectionComponents/Feedback";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin-top: 44px;
`;

export default function NavbarModal() {
  const { state } = useContext(Context);

  if (state.navbar) {
    return (
      <>
        <NavbarContainer>
          <Reader />
          <ViewToggle />
          <Feedback />
        </NavbarContainer>
      </>
    );
  } else {
    return null;
  }
}
