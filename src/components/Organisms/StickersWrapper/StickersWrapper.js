import React, { useContext } from "react";
import StickerWrapper from "components/Molecules/StickerWrapper/StickerWrapper";
import styled from "styled-components";
import { StickersContext } from "components/providers/StickersProvider";

const Wrapper = styled.div`
  overflow-y: scroll;
  padding: 30px;
`;

const Stickers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`;

const StickersWrapper = () => {
  const { tasks } = useContext(StickersContext);

  return (
    <Wrapper>
      <Stickers>
        {tasks.map((task) => (
          <StickerWrapper key={task.id} task={task}></StickerWrapper>
        ))}
      </Stickers>
    </Wrapper>
  );
};

export default StickersWrapper;
