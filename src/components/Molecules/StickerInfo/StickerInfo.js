import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 500px;
  width: 100%;
  background-color: #ccc;
  padding: 10px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`;

const StickerInfo = ({
  currentSticker: { title, description, category, data },
}) => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h2> {title} </h2>
        <p> {category} </p>
      </HeaderWrapper>
      <p> {description} </p>
      <p> {data} </p>
    </Wrapper>
  );
};

export default StickerInfo;
