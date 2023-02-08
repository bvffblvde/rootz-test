import styled from "styled-components";
import {sizes} from "../../theme/default/styles";

export const TeamPictureArea = styled.div`
  text-align: -webkit-center;

  .item-stack-top {
    content: ' ';
    display: table;
    clear: both;
  }

  .item-stack-bottom {
    content: ' ';
    display: table;
    clear: both;
    position: relative;
    margin-top: -12%;
    margin-left: 10%;

    @media (min-width: ${sizes.desktop}px) {
      display: unset;
      clear: unset;
      position: unset;
      margin-top: 0;
      margin-left: 30px;
    }
  }

  .item-stack-bottom-last {
    content: ' ';
    display: table;
    clear: both;
    position: relative;
    margin: -20% 50% 0 0;
    
    @media (min-width: ${sizes.desktop}px) {
      display: unset;
      clear: unset;
      position: unset;
      margin: unset;
    }
  }

  .item-stack-left {
    float: left;
    margin-right: -100%;
    position: relative;
    z-index: 1;
    
    @media (min-width: ${sizes.desktop}px) {
      width: 80%;
    }
  }

  .item-stack-last {
    float: left;
    margin-right: -100%;
    position: relative;
    z-index: 1;
    
    @media (min-width: ${sizes.desktop}px) {
      float: unset;
      margin-right: unset;
      z-index: 1;
      width: 120%;
    }
  }

  .item-stack-right {
    float: right;
    margin-left: -100%;
    position: relative;
    z-index: 1;

    @media (min-width: ${sizes.desktop}px) {
      float: unset;
      width: 80%;
      margin-top: 40%;
      margin-left: -27%;
    }
  }

  .item-stack-bottom-right {
    padding-top: 15%;
    margin-right: 10%;
    float: right;

    @media (min-width: ${sizes.desktop}px) {
      rotate: -25deg;
      padding-top: 0;
      margin-right: -10%;
    }
  }

  .item-stack-bottom-left {
    padding-top: 15%;
    padding-left: 15%;
    float: left;

    @media (min-width: ${sizes.desktop}px) {
      rotate: 230deg;
      padding-top: 0;
      padding-left: 0;
      float: unset;
      z-index: 0;
    }
  }

  @media (min-width: ${sizes.desktop}px) {
    display: flex;
  }
`;