import { useContext } from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { ImCross } from "react-icons/im";
import { SmallCardHeader, SmallCardParagraph } from "../../../Typography/index";
import { Context } from "../../../App";

const HNewsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 10px;
  margin-top: 15px;
  cursor: pointer;
  @media (max-width: 425px) {
    padding: 6px;
  }
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
  cursor: pointer;
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
  @media (max-width: 425px) {
    height: 30px;
    width: 30px;
  }
`;
const RestContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 90%;
  height: 98%;
  @media (max-width: 425px) {
    padding: 3%;
  }
`;
const SHeader = styled(SmallCardHeader)`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 0;
  font-size: 16px;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
const SParagraph = styled(SmallCardParagraph)`
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 0;
  font-size: 13px;
  margin-top: 2%;
  color: ${({ grey }) => (grey ? "#6a6a6a" : "#000")};
  @media (max-width: 425px) {
    font-size: 10px;
    height: 30px;
    line-height: 12px;
  }
`;
const truncate = (str) => {
  return str && str.length > 95 ? str.substring(0, 94) + "...." : str;
};
const truncateHeader = (str) => {
  if (window.innerWidth > 425) {
    return str && str.length > 100 ? str.substring(0, 99) + "...." : str;
  } else if (window.innerWidth < 355) {
    return str && str.length > 32 ? str.substring(0, 31) + "...." : str;
  } else {
    return str && str.length > 40 ? str.substring(0, 39) + "...." : str;
  }
};

export default function HNewsCard({ data }) {
  const { title, published, link, summary, id } = data;
  const { state, dispatch } = useContext(Context);
  const handleClick = () => {
    dispatch({ type: "link", payload: link });
    dispatch({ type: "newsmodal", payload: true });
  };
  const handleRemoveCard = (id) => {
    console.log(id);
    const newState = state;
    const index = newState.news.findIndex((n) => n.id === id);
    if (index === -1) return;
    newState.news.splice(index, 1);
    dispatch({ type: "news", payload: newState.news });
  };
  return (
    <>
      <HNewsCardContainer id={id}>
        <Card
          width="90%"
          padding="8px"
          br="10px"
          height="70px"
          onClick={handleClick}
        >
          <IconContainer>
            <Icon src={`${process.env.PUBLIC_URL}/avatar.jpg`} />
          </IconContainer>
          <RestContainer>
            <SHeader>{truncateHeader(title)}</SHeader>
            <SParagraph>{truncate(summary)}</SParagraph>
            <SParagraph grey>{published}</SParagraph>
          </RestContainer>
        </Card>
        <RemoveIconContainer>
          <RemoveButton onClick={() => handleRemoveCard(id)}>
            <ImCross />
          </RemoveButton>
        </RemoveIconContainer>
      </HNewsCardContainer>
    </>
  );
}
