import styled from "styled-components";

export const SmallCardHeader = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 16px;
  line-height: 1px;
  @media (max-width: 560px) {
    font-size: 8px;
  }
  @media (max-width: 760px) {
    font-size: 10px;
  }
  @media (max-width: 920px) {
    font-size: 12px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
export const SmallCardParagraph = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 12px;
  padding: 0;
  margin: 1%;
  color: ${({ grey }) => (grey ? "grey" : "#000")};
  /* @media (max-width: 1024px) {
    font-size: 8px;
  }
  @media (max-width: 560px) {
    font-size: 6px;
  } */
  @media (max-width: 560px) {
    font-size: 6px;
  }
  @media (max-width: 760px) {
    font-size: 8px;
  }
  @media (max-width: 920px) {
    font-size: 8px;
  }
  @media (max-width: 1025px) {
    font-size: 10px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const LargeCardHeader = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  font-size: 20px;
  font-weight: 900;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 560px) {
    font-size: 10px;
  }
`;
