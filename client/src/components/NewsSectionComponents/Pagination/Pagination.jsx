import { useState } from "react";
import styled from "styled-components";
import { MainContainer } from "../../../container/MainContainer";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 50%;
  border-color: transparent;
  box-shadow: 0 5px 10px #8484844f, 0 15px 40px rgba(166, 173, 201, 0.2);
`;

const UnSelectedButton = styled(Button)`
  background-color: grey;
  color: #fff;
`;

export default function Pagination({
  data,
  RenderComponent,
  pageLimit,
  dataLimit,
}) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => (page === 1 ? page : page - 1));
  }
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <>
      {getPaginatedData().map((d, idx) => (
        <RenderComponent key={idx} data={d} />
      ))}
      <ButtonContainer>
        <Button onClick={goToPreviousPage}>{"<<"}</Button>

        {getPaginationGroup().map((item, index) => (
          <Button key={index} onClick={changePage}>
            <span>{item}</span>
          </Button>
        ))}

        <Button onClick={goToNextPage}>{">>"}</Button>
      </ButtonContainer>
    </>
  );
}
