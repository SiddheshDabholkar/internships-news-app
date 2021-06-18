import styled from "styled-components";
import { MainContainer } from "../container/MainContainer";
import Reader from "../components/SideSectionComponents/Reader";
import Feedback from "../components/SideSectionComponents/Feedback";
import ViewToggle from "../components/SideSectionComponents/ViewToggle";

const SideSectionContainer = styled(MainContainer)`
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  backdrop-filter: blur(0px);
  height: 100%;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px #42424233;

  top: 0;
  left: 0;
  position: fixed;
  margin: 0;
  background-color: aliceblue;
  @media (max-width: 790px) {
    width: 30%;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top: 50px;
  width: 70%;
  height: 85%;
`;

export default function SideSection() {
  return (
    <>
      <SideSectionContainer small>
        <Container>
          <Reader />
          <ViewToggle />
          <Feedback />
        </Container>
      </SideSectionContainer>
    </>
  );
}
