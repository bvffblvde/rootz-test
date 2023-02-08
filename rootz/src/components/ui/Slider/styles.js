import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const SliderCard = styled.div`
  height: 100%;
  isolation: isolate;
  background-image: url(${require(`../../img/Figure.svg`).default});
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  vertical-align: middle;
  text-align: center;
  -webkit-animation: pulsing 2s infinite;
  animation: pulsing 2s infinite;

  @-webkit-keyframes pulsing {
    0% {
      transform: scale(0.9, 0.9)
    }
    50% {
      transform: scale(1.0, 1.0);
    }
    100% {
      transform: scale(0.9, 0.9);
    }
  }

  @keyframes pulsing {
    0% {
      transform: scale(0.9, 0.9)
    }
    50% {
      transform: scale(1.0, 1.0);
    }
    100% {
      transform: scale(0.9, 0.9);
    }
  }

  .slide-card {
    // height: 100%;
    padding-top: 30%;
  }
`;

export const TitleSlide = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: ${colors.BalticSea};
  opacity: 0.9;
  flex: none;
  order: 1;
  flex-grow: 0;
  text-align: center;
  padding-bottom: 10px;
`;

export const SubTitleSlide = styled.div`
  font-weight: 400;
  flex: none;
  order: 1;
  flex-grow: 0;
  font-size: 15px;
  line-height: 175%;
  text-align: center;
  color: ${colors.BalticSea};
  opacity: 0.9;
  padding: 0 60px 0;
`;

export const Container = styled.div`
  margin: 15px 10px 40px;
  padding: 20px 0 20px 20px;
`;
