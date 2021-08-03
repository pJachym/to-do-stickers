import React from "react";
import styled from "styled-components";
import ArticleWrapper from "components/Molecules/ArticleWrapper/ArticleWrapper";
import { articles } from "data/articles";

const Wrapper = styled.div`
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.darkGrey};
  overflow: hidden;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-bottom: 30px;
`;

const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Articles = () => {
  return (
    <Wrapper>
      <Title>Articles</Title>
      <ContentWrapper>
        {articles.map((article) => (
          <ArticleWrapper
            key={article.title}
            article={article}
          ></ArticleWrapper>
        ))}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Articles;
