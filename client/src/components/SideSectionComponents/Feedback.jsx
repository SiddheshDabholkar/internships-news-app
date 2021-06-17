import React from "react";
import { Card } from "../Card";
import styled from "styled-components";
import { LargeCardHeader } from "../../Typography";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 80%;
  margin-bottom: 5%;
  background-color: #36d88d;
  border-radius: 5px;
  border-color: transparent;
  font-weight: 900;
`;

export default function Feedback() {
  return (
    <>
      <Card width="100%" m="10px" height="25%" br="8px" col>
        <LargeCardHeader>Have a Feedback?</LargeCardHeader>
        <Button>We're Listening</Button>
      </Card>
    </>
  );
}
