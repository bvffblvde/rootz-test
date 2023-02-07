import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const SliderCard = styled.div`
  height: 375px;
  background-color: ${colors.WaxFlower};
  isolation: isolate;
  padding-top: 20px;
  padding-left: 20px;
  margin-top: 15px;
`;

export const TitleSlide = styled.div`
  font-weight: 600;
  font-size: 17px;
  line-height: 150%;
  color: ${colors.White};
  margin-right: 20px;
  margin-bottom: 20px;
`;

export const SubTitleSlide = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.0025em;
  margin-right: 20px;
`;

export const Container = styled.div`
  margin: 15px 10px 40px;
  padding: 20px 0 20px 20px;
`;
