import React, { useContext } from "react";
import { StickersContext } from "components/providers/StickersProvider";
import {
  Wrapper,
  AboutWrapper,
  Title,
  Category,
  DeleteButton,
  ContextWrapper,
  Description,
  Data,
} from "./StickerWrapper.styles";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";

const StickerWrapper = ({ task }) => {
  const { deleteTask } = useContext(StickersContext);

  const handleDeleteTask = () => {
    deleteTask(task.id);
  };

  return (
    <Wrapper>
      <DeleteButton onClick={handleDeleteTask}>
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
