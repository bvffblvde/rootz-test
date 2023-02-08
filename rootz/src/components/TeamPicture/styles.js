import styled from "styled-components";
import {sizes} from "../../theme/default/styles";

export const TeamPictureArea = styled.div`
  text-align: -webkit-center;
  animation-name: Appearance;
  animation-duration: 3s;
  animation-timing-function: cubic-bezier(.1, -.6, .2, 0);
  
  @-webkit-keyframes Appearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes Appearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes Appearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes Appearance {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}

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

  @media (min-width: ${sizes.netbook}px) {
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

  @media (min-width: ${sizes.netbook}px) {
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


  @media (min-width: ${sizes.netbook}px) {
    width: 80%;
  }
}

.item-stack-last {
  float: left;
  margin-right: -100%;
  position: relative;
  z-index: 1;

  @media (min-width: ${sizes.tabletMin}px) {
    float: unset;
    margin-left: 35%;
    z-index: 1;
    width: 120%;
  }

  @media (min-width: ${sizes.netbook}px) {
    float: left;
    margin-left: 0;
    z-index: 1;
    width: 120%;
  }
}

.item-stack-right {
  float: right;
  margin-left: -100%;
  position: relative;
  z-index: 1;

  @media (min-width: ${sizes.netbook}px) {
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

  @media (min-width: ${sizes.netbook}px) {
    rotate: -25deg;
    padding-top: 0;
    margin-right: -10%;
  }
}

.item-stack-bottom-left {
  padding-top: 15%;
  padding-left: 15%;
  float: left;

  @media (min-width: ${sizes.netbook}px) {
    rotate: 230deg;
    padding-top: 0;
    padding-left: 0;
    float: unset;
    z-index: 0;
  }
}

@media (min-width: ${sizes.netbook}px) {
  display: flex;
}
`;