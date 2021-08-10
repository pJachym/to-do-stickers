import React, { useContext, useState } from "react";
import { StickersContext } from "components/providers/StickersProvider";
import StickerWrapper from "components/Molecules/StickerWrapper/StickerWrapper";
import { Stickers, Wrapper } from "./StickersWrapper.styles";
import useModal from "../Modal.js/useModal";
import StickerInfo from "components/Molecules/StickerInfo/StickerInfo";

const StickersWrapper = () => {
  const { tasks } = useContext(StickersContext);
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();
  const [currentSticker, setCurrentSticker] = useState(null);

  const stickerInfo = async (task) => {
    const currentTask = task;
    setCurrentSticker(currentTask);
    handleOpenModal();
  };

  return (
    <Wrapper>
      <Stickers>
        {tasks.map((task) => {
          return (
            <StickerWrapper
              onClick={() => stickerInfo(task)}
              key={task.id}
              task={task}
            ></StickerWrapper>
          );
        })}
      </Stickers>
      {isOpen ? (
        <Modal handleCloseModal={handleCloseModal}>
          <StickerInfo currentSticker={currentSticker} />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default StickersWrapper;
