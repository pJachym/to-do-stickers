import React from "react";
import {
  Wrapper,
  HeaderWrapper,
  Title,
  ContentP,
} from "./ArticleWrapper.styles";

const ArticleWrapper = ({ article }) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title> {article.title} </Title>
        <p> {article.category} </p>
      </HeaderWrapper>
      <ContentP>{article.content} </ContentP>
    </Wrapper>
  );
};

export default ArticleWrapper;
