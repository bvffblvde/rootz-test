import styled from "styled-components";
import {colors, sizes} from "../../../theme/default/styles";

export const SearchBarWrapper = styled.div`
  box-shadow: 0 20px 20px rgba(240, 101, 126, 0.05);
  border-radius: 40px;
  background-color: ${colors.White};
  display: flex;
  justify-content: space-between;
  padding: 8px;
  text-align: center;
  
  input {
    font-family: 'Poppins',serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    border: none;
    outline: none;
    background-color: unset;
    text-align: center;
  }
  
  svg {
    position: relative;
    top: 12px;
    left: 15px;
  }
  
  @media (min-width: ${sizes.desktop}px) {
    margin-left: 25%;
    width: 50%;
  }
`;