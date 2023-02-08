import styled from "styled-components";
import {colors, sizes} from "../../../theme/default/styles";

export const Card = styled.div`
  background: ${colors.HintOfRed};
  padding: 70px 20px 0;
  text-align: center;

  .wrapper {
    margin: 30px 0 40px;

    @media (min-width: ${sizes.netbook}px) {
      margin: 30px 0 48px;
    }
  }

  .icon-position {
    display: block;
    margin: auto;
    width: 336px;
    height: 181px;
    
    @media (max-width: ${sizes.mobileMax}px) {
      width: 300px;
    }
    
    @media (min-width: ${sizes.tablet}px) {
      width: 543px;
      height: 293px;
    }

    @media (min-width: ${sizes.netbook}px) {
      width: 600px;
      height: 293px;
    }
  }

  .flex-container {
    display: block;

    @media (min-width: ${sizes.desktop}px) {
      display: flex;
      justify-content: space-evenly;
    }
  }

  @media (min-width: ${sizes.netbook}px) {
    padding: 120px 80px 0;
    display: block;
  }

  @media (min-width: ${sizes.desktop}px) {
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
  
  .drop-list-area {
    @media (min-width: ${sizes.netbook}px) {
      width: 50%;
    }
  }

  @media (min-width: ${sizes.tabletMin}px) {
    padding: 0 80px 80px;
  }
  
  @media (min-width: ${sizes.netbook}px) {
    margin: 0;
    padding: 0 160px 195px;
    display: flex;
    justify-content: space-between;
  }
`;

export const SliderArea = styled.div`
  background: ${colors.WaxFlower};
  margin-top: 76px;
  height: 375px;
  
  @media (min-width: ${sizes.netbook}px) {
    margin-top: 0;
    height: 655px;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: ${colors.EbonyClay};
  margin: 0 0 20px;
  text-transform: capitalize;
  
  @media (min-width: ${sizes.netbook}px) {
    font-size: 40px;
    line-height: 56px;
    margin: 0 0 40px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  color: ${colors.BalticSea};
  mix-blend-mode: normal;
  opacity: 0.9;
  margin: 0 0 32px;
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 18px;
    line-height: 32px;
    margin: 0 0 56px;
  }
`;

export const CardArea = styled.div`

  @media (min-width: ${sizes.tabletMin}px) {
    padding: 0 80px 0;
  }
  
  @media (min-width: ${sizes.netbook}px) {
    padding: 124px 160px 195px;
  }
`;

export const TeamContainer = styled.div`
  margin: 0 0 100px;
  padding: 100px 18px 0;
  text-align: center;
  
  @media (min-width: ${sizes.netbook}px) {
    margin: 0;
    padding: 195px 160px 0;
    display: grid;
    justify-content: center;
  }
`;
