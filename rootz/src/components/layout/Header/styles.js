import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const Header = styled.div`
  height: 107px;
  position: sticky;
  top: 0;
  background: ${colors.HintOfRed};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
`;

export const ToggleButtonWrapper = styled.button`
  border: none;
  background: none;
`;