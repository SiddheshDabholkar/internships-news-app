import { useState, useEffect, useContext } from "react";
import { MainContainer } from "../container/MainContainer";
import HNewsCard from "../components/NewsSectionComponents/NewsCard/HNewsCard";
import VNewsCard from "../components/NewsSectionComponents/NewsCard/VNewsCard";
import styled from "styled-components";
import Pagination from "../components/NewsSectionComponents/Pagination/Pagination";
import { Context } from "../App";

const url = "https://api.first.org/data/v1/news";

const VNewsCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: inherit;
  @media (max-width: 425px) {
    flex-direction: column;
    height: auto;
    flex-wrap: nowrap;
  }
`;

const Root = styled(MainContainer)`
  top: 0;
  right: 0;
  position: absolute;
  margin: 0;
  @media (max-width: 790px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 50px;
  }
`;

export default function NewsSection() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Something went wrong while fetching news");
      })
      .then((news) => {
        dispatch({ type: "news", payload: news.data });
      });
    // .catch((error) => console.log(error.message));
  }, []);
  console.log("home", state.news);

  const ToggleSelection = () => {
    if (state.toggle) {
      return (
        <>
          <Pagination
            data={state.news}
            RenderComponent={HNewsCard}
            pageLimit={3}
            dataLimit={5}
          />
        </>
      );
    } else {
      return (
        <>
          <VNewsCardContainer>
            <Pagination
              data={state.news}
              RenderComponent={VNewsCard}
              pageLimit={3}
              dataLimit={6}
            />
          </VNewsCardContainer>
        </>
      );
    }
  };
  return (
    <>
      <Root>
        <ToggleSelection />
      </Root>
    </>
  );
}
