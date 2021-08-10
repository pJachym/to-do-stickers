import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleWrapper from "components/Molecules/ArticleWrapper/ArticleWrapper";
import { Wrapper, Title, ContentWrapper, LoadingP } from "./Articles.styles";

const API_TOKEN = "680a6e79c23b3c6af9a4802c77b7a0";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .post(
        "https://graphql.datocms.com/",
        {
          query: `
        {
          allArticles {
            id
            title
            category
            content
          }
        }
        `,
        },
        {
          headers: {
            authorization: `Bearer ${API_TOKEN}`,
          },
        }
      )
      .then(({ data }) => setArticles(data.data.allArticles))
      .catch((err) => err);
  }, []);

  return (
    <Wrapper>
      <Title>Articles</Title>
      <ContentWrapper>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleWrapper key={article.title} article={article} />
          ))
        ) : (
          <LoadingP>Loading...</LoadingP>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Articles;
