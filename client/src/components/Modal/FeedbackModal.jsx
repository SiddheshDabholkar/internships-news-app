import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../App";
import { MainContainer } from "../../container/MainContainer";
import { Container } from "../../sections/SideSection";
import Reader from "../../components/SideSectionComponents/Reader";
import Feedback from "../../components/SideSectionComponents/Feedback";
import FeedbackForm from "../FeedbackForm";
import useWindowSize from "../../Hooks/useWindow";

export const BG = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  backdrop-filter: blur(2px);
  background-color: transparent;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  background-color: aliceblue;
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  backdrop-filter: blur(0px);
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px #42424233;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;
const SideContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
`;

export default function FeedBackModal() {
  const { state, dispatch } = useContext(Context);
  const { width } = useWindowSize();

  const handleClick = () => {
    dispatch({ type: "modal", payload: false });
  };

  const DecideUsingWidth = () => {
    if (width > 800) {
      return (
        <BG onClick={handleClick}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <SideContainer>
              <Container>
                <Reader />
                <Feedback />
              </Container>
            </SideContainer>
            <FeedbackForm />
          </ModalContainer>
        </BG>
      );
    } else {
      return <FeedbackForm />;
    }
  };

  if (state.modal) {
    return <DecideUsingWidth />;
  } else {
    return null;
  }
}
