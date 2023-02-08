import styled from "styled-components";
import {colors, sizes} from "../../../theme/default/styles";

export const Card = styled.div`
  background: ${colors.HintOfRed};
  padding: 70px 20px 0;
  text-align: center;

  .wrapper {
    margin: 30px 0 40px;
    
    @media (min-width: ${sizes.tablet}px) {
      margin: 30px 0 48px;
    }
  }

  .icon-position {
    display: block;
    margin: auto;
    width: 336px;
    height: 181px;
    
    @media (min-width: ${sizes.tablet}px) {
      width: 543px;
      height: 293px;
    }
  }

  .flex-container {
    display: block;

    @media (min-width: ${sizes.tablet}px) {
      display: flex;
    }
  }

  @media (min-width: ${sizes.tablet}px) {
    padding: 120px 80px 0;
    display: flex;
  }
`;

export const TextAbout = styled.text`
  font-weight: 400;
  font-size: 15px;
  line-height: 213%;
  color: ${colors.Black};
  margin-bottom: 40px;
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 16px;
  }
`;

export const Container = styled.div`
  margin: 100px 0 0;
  padding: 0 18px 0;
`;

export const SliderArea = styled.div`
  background: ${colors.WaxFlower};
  margin-top: 76px;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: ${colors.EbonyClay};
  margin: 0 0 20px;
  text-transform: capitalize;
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  color: ${colors.BalticSea};
  mix-blend-mode: normal;
  opacity: 0.9;
  margin: 0 0 32px;
`;

export const TeamPictureArea = styled.div`
  margin-bottom: 110px;
  
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
    margin-left: 10%
  }

  .item-stack-bottom-last {
    content: ' ';
    display: table;
    clear: both;
    position: relative;
    margin-top: -20%;
  }

  .item-stack-left {
    float: left;
    margin-right: -100%;
    position: relative;
    z-index: 1;
  }

  .item-stack-right {
    float: right;
    margin-left: -100%;
    position: relative;
    z-index: 1;
  }
  
  .item-stack-bottom-right {
    padding-top: 15%;
    margin-right: 10%;
    float: right;
  }
  
  .item-stack-bottom-left {
    padding-top: 15%;
    padding-left: 15%;
    float: left;
  }
`;