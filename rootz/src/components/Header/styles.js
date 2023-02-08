import styled from "styled-components";
import {colors, sizes} from "../../theme/default/styles";

export const Wrapper = styled.div`
  background-color: ${colors.HintOfRed};
  position: sticky;
  top: 0;
  z-index: 10;
  
  @media (min-width: ${sizes.tablet}px) {
    position: relative;
    top: unset;
  }
`;

export const Header = styled.div`
  height: 107px;
  background: ${colors.HintOfRed};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  
  .display-mobile-none {
    @media (max-width: ${sizes.tablet}px) {
      display: none;
    }
  }
  
    @media (min-width: ${sizes.tablet}px) {
      height: 112px;
      padding: 0 80px;
    }
`;

export const ToggleButtonWrapper = styled.button`
  border: none;
  background: none;
  padding: 0;
  
  @media (min-width: ${sizes.tablet}px) {
    display: none;
  }
`;
