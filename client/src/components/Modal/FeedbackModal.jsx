import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../App";

const BG = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  background-color: black;
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
  background-color: blue;
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
export default function FeedBackModal() {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: "modal", payload: false });
  };
  if (state.modal) {
    return (
      <>
        <BG onClick={handleClick}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            lol
          </ModalContainer>
        </BG>
      </>
    );
  } else {
    return null;
  }
}
