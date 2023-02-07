import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const MoreInfoContainer = styled.div`
  margin-top: 48px;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DescriptionTitle = styled.p`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.BalticSea};
  opacity: 0.9;
  margin: 0;
`;

export const Description = styled.p`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  color: ${colors.BalticSea};
  opacity: 0.9;
`;

export const CircleButton = styled.button`
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${colors.Froly};
  color: ${colors.White};
  border: none;
  cursor: pointer;
`;

export const GrayLine = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  outline: none;
  background-color: ${colors.BalticSea};
  opacity: 0.2;
  margin: 24px 0;
`;