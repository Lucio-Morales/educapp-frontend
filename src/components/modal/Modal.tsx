import React from 'react';
import styled, { keyframes } from 'styled-components';
// import Register from '../forms/Register';
// import Login from '../forms/Login';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: #fff;
  width: 400px;
  height: 100vh;
  padding: 20px;
  position: relative;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  animation: ${slideIn} 0.5s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 32px;
  height: 32px;
  background-color: #fdecea;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #c0392b;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #f8d7da;
    color: #922b21;
    transform: scale(1.1);
  }

  &:focus {
    outline: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(event) => event.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Container>{children}</Container>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
