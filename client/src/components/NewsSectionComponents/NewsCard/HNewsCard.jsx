import React from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { ImCross } from "react-icons/im";

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
`;
const RemoveButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  color: red;
  border-color: transparent;
  border-radius: 50%;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
  background-color: #fff;
`;

export default function HNewsCard({ data }) {
  // console.log(data);
  return (
    <>
      <HNewsCardContainer>
        <Card width="90%" padding="20px" br="10px">
          {data.title}
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
