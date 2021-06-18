import React from "react";
import { Card } from "../Card";
import styled from "styled-components";
import { SmallCardHeader } from "../../Typography";
import { SmallCardParagraph } from "../../Typography";

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  padding: 5%;
`;
const Avatar = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  @media (max-width: 560px) {
    height: 28px;
    width: 28px;
  }
  @media (max-width: 760px) {
    height: 30px;
    width: 30px;
  }
  @media (max-width: 920px) {
    height: 39px;
    width: 39px;
  }
  @media (max-width: 1024px) {
    height: 42px;
    width: 42px;
  }
  @media (min-width: 1024px) {
    height: 48px;
    width: 48px;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 5%;
`;

export default function Reader() {
  return (
    <>
      <Card width="100%" m="10px" height="12%" br="8px">
        <AvatarContainer>
          <Avatar src={`${process.env.PUBLIC_URL}/avatar.jpg`} />
        </AvatarContainer>
        <ContentContainer>
          <SmallCardHeader>Hi Reader,</SmallCardHeader>
          <SmallCardParagraph>Here's your News!</SmallCardParagraph>
        </ContentContainer>
      </Card>
    </>
  );
}
