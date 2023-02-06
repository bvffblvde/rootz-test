import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const FooterContainer = styled.footer`
  padding: 42px 30px;
  
  .media-container {
    display: flex;
    justify-content: space-between;
  }

`;
export const Title = styled.p`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 48px;
  color: ${colors.MineShaft};
  display: flex;
  align-items: center;
  text-transform: uppercase;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  color: ${colors.MineShaft};
  letter-spacing: 0.3px;
`;

export const Text = styled.p`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  color: ${colors.MineShaft};
  letter-spacing: 0.3px;
  margin: 0;
`;