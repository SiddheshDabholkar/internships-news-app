import { useContext } from "react";
import { BG } from "./FeedbackModal";
import styled from "styled-components";
import { Context } from "../../App";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  height: 80%;
  background-color: #000;
  border-radius: 15px;
  backdrop-filter: blur(0px);
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px #42424233;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  #frame {
    flex-grow: 1;
    flex-basis: 0;
    width: fit-content;
    border-color: transparent;
    border-radius: 15px;
  }
`;

const IframeContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
`;

export default function NewsModal() {
  const { state, dispatch } = useContext(Context);
  const { link } = state;
  const handleClick = () => {
    dispatch({ type: "newsmodal", payload: false });
  };

  // const iframe = `<iframe src="Content-Security-Policy: frame-ancestors 'self' ${link} X-Frame-Options: ALLOW-FROM ${link}" id="frame"></iframe>`;
  const iframe = `<iframe src="${link}" id="frame"></iframe>`;
  function Iframe(props) {
    return (
      <IframeContainer
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
      />
    );
  }

  if (state.newsmodal) {
    return (
      <>
        <BG onClick={handleClick}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <Iframe iframe={iframe} />
          </ModalContainer>
        </BG>
      </>
    );
  } else {
    return null;
  }
}
