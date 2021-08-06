import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 600px;
  min-height: 650px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  z-index: 99;
  &:focus {
    outline: none;
  }

  button {
    margin-top: 25px;
    width: 100px;
    height: 45px;
    border: 1px solid ${({ theme }) => theme.colors.darkGrey};
    background-color: #fff;
    border-radius: 6px;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const BackgroundDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.6;
`;

const modalContainer = document.getElementById("modal-container");

const Modal = ({ children, handleCloseModal }) => {
  const modalNode = document.createElement("div");

  useEffect(() => {
    modalContainer.appendChild(modalNode);

    return () => {
      modalContainer.removeChild(modalNode);
    };
  }, [modalNode]);

  return ReactDOM.createPortal(
    <>
      <Wrapper>
        {children}
        <button onClick={handleCloseModal}>close</button>
      </Wrapper>
      <BackgroundDiv />
    </>,
    modalNode
  );
};

export default Modal;
