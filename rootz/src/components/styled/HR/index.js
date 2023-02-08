import styled from "styled-components";
import {colors, sizes} from "../../../theme/default/styles";

export const HR = styled.hr`
  height: 3px;
  margin: 0 20px 0 20px;
  background-color: ${colors.EbonyClay};
  border: none;
  outline: none;
  
  @media (min-width: ${sizes.tablet}px) {
    margin: 0 80px;
  }
`;