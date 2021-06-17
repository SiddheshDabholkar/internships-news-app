import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  margin: ${({ m }) => (m ? m : "0px")};
  border-radius: ${({ br }) => br};
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 40px rgba(166, 173, 201, 0.2);
`;
