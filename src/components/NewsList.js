import React from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: "열공하는 기훈이",
  description: "새벽 5시반 스터디카페에 1등으로 출석해 깜놀",
  url: "https://github.com/qorlgns1",
  urlToImage: "https://avatars.githubusercontent.com/u/63835963?v=4",
};

const NewsList = () => {
  return (
    <NewsListBlock>
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
      <NewsItem article={sampleArticle} />
    </NewsListBlock>
  );
};

export default NewsList;
