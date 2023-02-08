import styled from "styled-components";
import {sizes} from "../../theme/default/styles";

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
      grid-column: 1 / span 9;
      padding-top: 70%;
    }
  }

  .item-stack-bottom {
    grid-column: 4 / -1;
    grid-row: 1;
  }
`;