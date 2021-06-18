import styled from "styled-components";
import { useContext } from "react";
import { Card } from "../Card";
import { LargeCardHeader } from "../../Typography";
import { Context } from "../../App";

export const Button = styled.button`
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
  font-weight: bolder;
  font-size: 16px;
`;

const SButton = styled(Button)`
  background-color: #ee3131a3;
`;

export default function Feedback() {
  const {
    state: { modal, navbar },
    dispatch,
  } = useContext(Context);

  const SelectButton = () => {
    if (modal) {
      return (
        <>
          <SButton
            onClick={() => {
              dispatch({ type: "modal", payload: !modal });
              dispatch({ type: "navbar", payload: false });
            }}
          >
            We're Listening
          </SButton>
        </>
      );
    } else {
      return (
        <>
          <Button
            onClick={() => {
              dispatch({ type: "modal", payload: !modal });
              dispatch({ type: "navbar", payload: false });
            }}
          >
            We're Listening
          </Button>
        </>
      );
    }
  };

  return (
    <>
      <Card width="100%" m="10px" height="25%" br="8px" col>
        <LargeCardHeader>Have a Feedback?</LargeCardHeader>
        <SelectButton />
      </Card>
    </>
  );
}
