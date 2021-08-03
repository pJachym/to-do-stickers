import React from "react";
import ArticleWrapper from "components/Molecules/ArticleWrapper/ArticleWrapper";
import { articles } from "data/articles";
import { Wrapper, Title, ContentWrapper } from "./Articles.styles";

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
