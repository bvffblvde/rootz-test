import styled from "styled-components";
import {colors, sizes} from "../../theme/default/styles";

export const FooterContainer = styled.footer`
  flex: 0 0 auto;
  padding: 42px 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 150px);
  
  .media-container {
    display: flex;
    justify-content: space-between;
  }

  .media-container-one {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  .media-container-two {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
  }
  .media-container-three {
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    display: flex;
    justify-content: space-between;
    padding: 96px 160px;
  }
`;
export const Title = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 48px;
  text-transform: uppercase;
  color: ${colors.MineShaft};
  margin: 0;
  
    @media (min-width: ${sizes.tablet}px) {
        font-size: 34px;
        margin: -10px 0 32px 0;
    }
`;

export const SubTitle = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  color: ${colors.MineShaft};
  letter-spacing: 0.3px;
  margin-top: 0;
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 20px;
    margin: 0 0 37px 0;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: ${colors.MineShaft};
  letter-spacing: 0.3px;
  margin: 0;

  @media (min-width: ${sizes.tablet}px) {
    font-size: 13px;
  }
`;