import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const TextButton = styled.button`
  border: none;
  background: none;
  color: black;
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 150%;
  opacity: 0.8;
  margin-bottom: 56px;
  
  &:active, &:focus {
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
  }
  animation: ease-in 0.3s;
  animation-name: slideInFromTop;
  @keyframes slideInFromTop {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const ButtonArea = styled.div`
  margin-top: 72px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-family: Poppins, sans-serif;
  animation: ease-in-out 0.3s;
    animation-name: fadeInOpacity;
    @keyframes fadeInOpacity {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
`;

export const ModalContent = styled.div`
  background-color: ${colors.HintOfRed};
  height: 100vh;
  display: grid;
`;

export const ModalHeader = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 120%;
  letter-spacing: 0.02em;
`;

export const ModalBody = styled.div`
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.0025em;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;