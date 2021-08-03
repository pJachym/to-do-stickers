import React, { useContext } from "react";
import styled from "styled-components";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
import { StickersContext } from "components/providers/StickersProvider";

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid black;
  margin: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.8);
`;

const AboutWrapper = styled.div`
  padding: 10px;
  height: 25%;
  background-color: ${({ category }) => {
    switch (category) {
      case "sport":
        return `#FEB770`;

      case "work":
        return `#E66589`;

      case "life":
        return `#A27CFC`;

      case "study":
        return `#65C7E6`;

      default:
        return "#86FF94";
        break;
    }
  }};
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
`;

const Category = styled.h4`
  color: ${({ theme }) => theme.colors.white};
`;

const DeleteButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  background-color: transparent;
  top: 10px;
  background-image: url("https://image.flaticon.com/icons/png/512/1214/1214428.png");
  cursor: pointer;
  color: white;

  svg {
    width: 20px;
    height: 20px;
    background-color: transparent;
    color: white;
  }
`;
const ContextWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Description = styled.h4`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const Data = styled.h4`
  color: ${({ theme }) => theme.colors.darkGrey};
  position: absolute;
  bottom: 3px;
  right: 5px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StickerWrapper = ({ task }) => {
  const { deleteTask } = useContext(StickersContext);

  return (
    <Wrapper>
      <DeleteButton onClick={() => deleteTask(task.id)}>
        <DeleteIcon />
      </DeleteButton>
      <AboutWrapper category={task.category}>
        <Title>{task.title}</Title>
        <Category>{task.category}</Category>
      </AboutWrapper>
      <ContextWrapper>
        <Description>{task.description}</Description>
        <Data>{task.data}</Data>
      </ContextWrapper>
    </Wrapper>
  );
};

export default StickerWrapper;
