import { useState, useEffect, useContext } from "react";
import { MainContainer } from "../container/MainContainer";
import HNewsCard from "../components/NewsSectionComponents/NewsCard/HNewsCard";
import VNewsCard from "../components/NewsSectionComponents/NewsCard/VNewsCard";
import styled from "styled-components";
import Pagination from "../components/NewsSectionComponents/Pagination/Pagination";
import { toggleContext } from "../App";

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

export default function NewsSection() {
  const { state } = useContext(toggleContext);
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Something went wrong while fetching news");
      })
      .then((news) => {
        setNews(news.data);
      })
      .catch((error) => setError(error.message));
  }, []);
  console.log("home", news);
  console.log(state);

  const ToggleSelection = () => {
    if (state) {
      return (
        <>
          <Pagination
            data={news}
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
              data={news}
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
      <MainContainer>
        <ToggleSelection />
      </MainContainer>
    </>
  );
}
