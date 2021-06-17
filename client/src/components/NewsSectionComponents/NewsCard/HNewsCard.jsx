import React from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { ImCross } from "react-icons/im";
import { SmallCardHeader, SmallCardParagraph } from "../../../Typography/index";
const HNewsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 10px;
  margin-top: 15px;
`;
const RemoveIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 5%;
  margin: 10px;
`;
const RemoveButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: red;
  border-color: transparent;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  background-color: #fff;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 98%;
`;
const Icon = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;
const RestContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  height: 98%;
`;
const SHeader = styled(SmallCardHeader)`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 0;
  font-size: 16px;
`;
const SParagraph = styled(SmallCardParagraph)`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 0;
  font-size: 13px;
  margin-top: 2%;
  color: ${({ grey }) => (grey ? "#6a6a6a" : "#000")};
`;
const truncate = (str) => {
  return str && str.length > 100 ? str.substring(0, 99) + "...." : str;
};

export default function HNewsCard({ data }) {
  const { title, published, link, summary } = data;
  return (
    <>
      <HNewsCardContainer>
        <Card width="90%" padding="8px" br="10px" height="70px">
          <IconContainer>
            <Icon src={`${process.env.PUBLIC_URL}/avatar.jpg`} />
          </IconContainer>
          <RestContainer>
            <SHeader>{title}</SHeader>
            <SParagraph>{truncate(summary)}</SParagraph>
            <SParagraph grey>{published}</SParagraph>
          </RestContainer>
        </Card>
        <RemoveIconContainer>
          <RemoveButton>
            <ImCross />
          </RemoveButton>
        </RemoveIconContainer>
      </HNewsCardContainer>
    </>
  );
}
