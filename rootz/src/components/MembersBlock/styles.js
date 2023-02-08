import styled from "styled-components";
import {sizes} from "../../theme/default/styles";

export const IconArea = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;

  .item-stack-top {
    grid-column: 1 / span 8;
    grid-row: 1;
    padding-top: 85%;
    z-index: 1;
    
    @media (min-width: ${sizes.tabletMin}px) {
      grid-column: 1 / span 9;
      padding-top: 55%;
    }

    @media (min-width: ${sizes.tablet}px) {
      grid-column: 1 / span 9;
      padding-top: 45%;
    }
    
    @media (min-width: ${sizes.tabletMax}px) {
      grid-column: 1 / span 9;
      padding-top: 35%;
    }
    
    @media (min-width: ${sizes.netbook}px) {
      grid-column: 1 / span 9;
      padding-top: 30%;
    }

    @media (min-width: ${sizes.desktop}px) {
      grid-column: 1 / span 9;
      padding-top: 70%;
    }
  }

  .item-stack-bottom {
    grid-column: 4 / -1;
    grid-row: 1;
  }
`;