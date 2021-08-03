import React, { useContext } from "react";
import { ReactComponent as DeleteIcon } from "assets/icons/delete.svg";
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
