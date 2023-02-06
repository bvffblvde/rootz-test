import styled from "styled-components";
import {colors, sizes} from "../../../theme/default/styles";

export const Card = styled.div`
  background: ${colors.HintOfRed};
  padding: 70px 20px 0;
  text-align: center;

  .wrapper {
    margin-bottom: 40px;
    margin-top: 30px;
  }

  .icon-position {
    display: block;
    margin: auto;
  }
`;

export const IconArea = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;

  .item-stack-top {
    grid-column: 1 / span 8;
    grid-row: 1;
    padding-top: 75%;
    z-index: 1;
    
    @media (min-width: ${sizes.tablet}px) {
      grid-column: 2 / span 9;
      padding-top: 22%;
    }
  }

  .item-stack-bottom {
    grid-column: 4 / -1;
    grid-row: 1;
  }
`;

export const TextAbout = styled.text`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 213%;
  color: ${colors.Black};
  margin-bottom: 40px;
`;