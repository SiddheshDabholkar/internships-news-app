import { useContext } from "react";
import styled from "styled-components";
import { Card } from "../../Card";
import { ImCross } from "react-icons/im";
import { SmallCardHeader, SmallCardParagraph } from "../../../Typography";
import { Context } from "../../../App";

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
      <Card
        width="24%"
        padding="10px"
        br="8px"
        height="40%"
        m="15px"
        style={{ cursor: "pointer" }}
        id={id}
      >
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
      </Card>
    </>
  );
}
