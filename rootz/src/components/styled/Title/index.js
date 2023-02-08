import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const Title = styled.h1`
  font-weight: ${props => props.fontWeight || "normal"};
  font-size: ${props => props.fontSize || "15px"};
  line-height: ${props => props.lineHeight || "18px"};
  color: ${props => props.color || colors.BalticSea};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
  text-align: ${props => props.textAlign || "left"};
  text-transform: ${props => props.textTransform || "none"};
  text-decoration: ${props => props.textDecoration || "none"};
`;