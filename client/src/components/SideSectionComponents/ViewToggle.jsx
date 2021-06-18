import { LargeCardHeader } from "../../Typography";
import { Card } from "../Card";
import styled from "styled-components";
import { AiOutlineBars } from "react-icons/ai";
import { BsCardHeading } from "react-icons/bs";
import { useState, useContext } from "react";
import { Context } from "../../App";

const ToggleButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 10px 0px;
`;
const ButtonLeft = styled.button`
  display: flex;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 15px 0px;
  cursor: pointer;
  border-color: transparent;
  #active {
    background-color: #36d88d;
  }
`;
const ButtonRight = styled.button`
  cursor: pointer;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 15px 0px;
  border-color: transparent;
  #active {
    background-color: #36d88d;
  }
`;
const MutatedLeftButton = styled(ButtonLeft)`
  background-color: #36d88d;
`;
const MutatedRightButton = styled(ButtonRight)`
  background-color: #36d88d;
`;
export default function ViewToggle() {
  const [isRow, setIsRow] = useState(true);
  const {
    state: { toggle },
    dispatch,
  } = useContext(Context);

  const DecideButtonStyles = () => {
    if (isRow) {
      return (
        <>
          <ButtonLeft
            onClick={() => {
              setIsRow(false);
              dispatch({ type: "toggle", payload: false });
              dispatch({ type: "navbar", payload: false });
            }}
          >
            <BsCardHeading style={{ fontSize: "30px" }} />
          </ButtonLeft>
          <MutatedRightButton
            onClick={() => {
              setIsRow(true);
              dispatch({ type: "toggle", payload: true });
              dispatch({ type: "navbar", payload: false });
            }}
          >
            <AiOutlineBars style={{ fontSize: "30px" }} />
          </MutatedRightButton>
        </>
      );
    } else {
      return (
        <>
          <MutatedLeftButton
            onClick={() => {
              setIsRow(false);
              dispatch({ type: "toggle", payload: false });
              dispatch({ type: "navbar", payload: false });
            }}
          >
            <BsCardHeading style={{ fontSize: "30px" }} />
          </MutatedLeftButton>
          <ButtonRight
            onClick={() => {
              setIsRow(true);
              dispatch({ type: "toggle", payload: true });
              dispatch({ type: "navbar", payload: false });
            }}
          >
            <AiOutlineBars style={{ fontSize: "30px" }} />
          </ButtonRight>
        </>
      );
    }
  };

  return (
    <>
      <Card width="100%" m="10px" height="25%" br="8px" col>
        <LargeCardHeader>View Toggle</LargeCardHeader>
        <ToggleButtonContainer>
          <DecideButtonStyles />
        </ToggleButtonContainer>
      </Card>
    </>
  );
}
