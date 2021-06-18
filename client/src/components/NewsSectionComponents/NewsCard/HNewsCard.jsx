import { useContext } from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { ImCross } from "react-icons/im";
import { SmallCardHeader, SmallCardParagraph } from "../../../Typography/index";
import { Context } from "../../../App";
import useWindowSize from "../../../Hooks/useWindow";

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
  margin: 2%;
  @media (max-width: 700px) {
    margin: 4%;
  }
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
  justify-content: space-evenly;
  width: 90%;
  height: 98%;
  margin: 2% 1%;
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

export default function HNewsCard({ data }) {
  const { width } = useWindowSize();
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
  const truncate = (str) => {
    if (width > 1200) {
      return str && str.length > 105 ? str.substring(0, 104) + "...." : str;
    } else if (width > 1100) {
      return str && str.length > 90 ? str.substring(0, 89) + "...." : str;
    } else if (width > 1000) {
      return str && str.length > 80 ? str.substring(0, 79) + "...." : str;
    } else if (width > 900) {
      return str && str.length > 70 ? str.substring(0, 69) + "...." : str;
    } else if (width > 800) {
      return str && str.length > 65 ? str.substring(0, 64) + "...." : str;
    } else if (width > 700) {
      return str && str.length > 41 ? str.substring(0, 40) + "...." : str;
    } else if (width > 600) {
      return str && str.length > 36 ? str.substring(0, 33) + "...." : str;
    } else if (width > 500) {
      return str && str.length > 50 ? str.substring(0, 49) + "...." : str;
    } else if (width > 400) {
      return str && str.length > 29 ? str.substring(0, 30) + "...." : str;
    } else if (width > 300) {
      return str && str.length > 20 ? str.substring(0, 19) + "...." : str;
    } else if (width > 200) {
      return str && str.length > 20 ? str.substring(0, 19) + "...." : str;
    } else {
      return str && str.length > 15 ? str.substring(0, 14) + "...." : str;
    }
  };
  const truncateHeader = (str) => {
    if (width > 1200) {
      return str && str.length > 90 ? str.substring(0, 89) + "...." : str;
    } else if (width > 1100) {
      return str && str.length > 85 ? str.substring(0, 74) + "...." : str;
    } else if (width > 1000) {
      return str && str.length > 68 ? str.substring(0, 67) + "...." : str;
    } else if (width > 900) {
      return str && str.length > 65 ? str.substring(0, 64) + "...." : str;
    } else if (width > 800) {
      return str && str.length > 55 ? str.substring(0, 54) + "...." : str;
    } else if (width > 700) {
      return str && str.length > 45 ? str.substring(0, 41) + "...." : str;
    } else if (width > 600) {
      return str && str.length > 31 ? str.substring(0, 30) + "...." : str;
    } else if (width > 500) {
      return str && str.length > 39 ? str.substring(0, 38) + "...." : str;
    } else if (width > 400) {
      return str && str.length > 25 ? str.substring(0, 24) + "...." : str;
    } else if (width > 300) {
      return str && str.length > 25 ? str.substring(0, 24) + "...." : str;
    } else if (width > 200) {
      return str && str.length > 20 ? str.substring(0, 19) + "...." : str;
    } else {
      return str && str.length > 15 ? str.substring(0, 14) + "...." : str;
    }
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
