import { useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../container/MainContainer";
import Reader from "../components/SideSectionComponents/Reader";
import Feedback from "../components/SideSectionComponents/Feedback";
import ViewToggle from "../components/SideSectionComponents/ViewToggle";
import FeedBackModal from "../components/Modal/FeedbackModal";

const SideSectionContainer = styled(MainContainer)`
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  backdrop-filter: blur(0px);
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px #42424233;
`;

const Container = styled.div`
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
