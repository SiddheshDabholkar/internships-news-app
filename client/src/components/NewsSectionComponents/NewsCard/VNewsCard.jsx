import { useContext } from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { ImCross } from "react-icons/im";
import { SmallCardHeader, SmallCardParagraph } from "../../../Typography";
import { Context } from "../../../App";

const SCard = styled(Card)`
  width: 24%;
  height: 40%;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 24%;
    height: 50%;
  }
  @media (max-width: 1024px) {
    width: 24%;
    height: 40%;
  }
  @media (max-width: 900px) {
    width: 25%;
    height: 40%;
  }
  @media (max-width: 790px) {
    width: 30%;
    height: 40%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    width: 90% !important;
    padding: 5px;
    margin-bottom: 0;
  }
`;

const CardIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  width: 95%;
  height: 95%;
`;
const DeleteIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  width: 100%;
  height: 10%;
`;
const RestContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 90%;
`;
const Image = styled.img`
  width: 100%;
  background-color: bisque;
  min-height: 45%;
`;
const SmallHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 20%;
  padding: 0;
  margin: 0;
`;
export const SSmallCardHeader = styled(SmallCardHeader)`
  flex-wrap: wrap;
  width: 100%;
  font-size: 16px;
  line-height: 16px;
  height: 32px;
  overflow: hidden;
`;
const SmallCardParaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 30%;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
`;
export const SSmallCardParagraph = styled(SmallCardParagraph)`
  flex-wrap: wrap;
  width: 100%;
  font-size: 12px;
  line-height: 16px;
  height: 48px;
  overflow: hidden;
`;
const truncate = (str) => {
  return str && str.length > 80 ? str.substring(0, 79) + "...." : str;
};

export default function VNewsCard({ data }) {
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
      <SCard padding="10px" br="8px" m="15px" id={id}>
        <CardIn>
          <DeleteIconContainer>
            <ImCross
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleRemoveCard(id)}
            />
          </DeleteIconContainer>
          <RestContainer onClick={handleClick}>
            <SmallHeaderContainer>
              <SSmallCardHeader>{truncate(title)}</SSmallCardHeader>
            </SmallHeaderContainer>
            <SmallCardParaContainer>
              <SSmallCardParagraph>{truncate(summary)}</SSmallCardParagraph>
            </SmallCardParaContainer>
            <SmallCardParagraph grey>{published}</SmallCardParagraph>
            <Image src={link} />
          </RestContainer>
        </CardIn>
      </SCard>
    </>
  );
}
