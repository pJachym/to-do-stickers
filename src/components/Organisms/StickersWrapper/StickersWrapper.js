import React, { useContext } from "react";
import { StickersContext } from "components/providers/StickersProvider";
import StickerWrapper from "components/Molecules/StickerWrapper/StickerWrapper";
import { Stickers, Wrapper } from "./StickersWrapper.styles";

const StickersWrapper = () => {
  const { tasks } = useContext(StickersContext);

  return (
    <Wrapper>
      <Stickers>
        {tasks.map((task) => {
          return <StickerWrapper key={task.id} task={task}></StickerWrapper>;
        })}
      </Stickers>
    </Wrapper>
  );
};

export default StickersWrapper;
