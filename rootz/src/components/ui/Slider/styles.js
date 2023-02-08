import styled from "styled-components";
import {colors, sizes} from "../../../theme/default/styles";

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
    padding-top: 40%;

    img {
      position: absolute;
      width: 40%;
      top: 2%;
      left: 5%;
      transform: translate(-50%, -50%);
      animation-name: slide;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
      animation-timing-function: ease-in-out;
      @keyframes slide {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(0, 10px);
        }
      }
      @media (min-width: ${sizes.mobileMax}px) {
        width: 30%;
        top: 5%;
      }

      @media (min-width: ${sizes.netbook}px) {
        width: 52%;
        top: 15%;
      }
      
      @media (min-width: ${sizes.desktop}px) {
        width: 55%;
        top: 12%;
      }
    }

    @media (min-width: ${sizes.mobileMax}px) {
      padding-top: 30%;
    }

    @media (min-width: ${sizes.tabletMin}px) {
      padding-top: 22%;
      padding-left: 25%;
      width: 50%;
    }

    @media (min-width: ${sizes.netbook}px) {
      padding-top: 80%;
    }
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

  @media (min-width: ${sizes.tablet}px) {
    padding-top: 20%;
  }
  @media (min-width: ${sizes.netbook}px) {
    padding-top: 0;
  }
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

  @media (min-width: ${sizes.tablet}px) {
    padding: 0;
  }
`;
