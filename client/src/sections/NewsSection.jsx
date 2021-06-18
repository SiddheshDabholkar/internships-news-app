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
`;

const Root = styled(MainContainer)`
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export default function NewsSection() {
  const { state, dispatch } = useContext(Context);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Something went wrong while fetching news");
      })
      .then((news) => {
        dispatch({ type: "news", payload: news.data });
      })
      .catch((error) => setError(error.message));
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
