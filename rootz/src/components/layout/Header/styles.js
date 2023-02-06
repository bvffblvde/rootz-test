import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const Wrapper = styled.div`
  background-color: ${colors.HintOfRed};
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const Header = styled.div`
  height: 107px;
  background: ${colors.HintOfRed};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const ToggleButtonWrapper = styled.button`
  border: none;
  background: none;
  padding: 0;
`;