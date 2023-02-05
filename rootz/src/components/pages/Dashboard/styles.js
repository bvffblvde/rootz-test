import styled from "styled-components";
import {colors} from "../../../theme/default/styles";

export const Card = styled.div`
  background: ${colors.HintOfRed};
  padding: 70px 20px 0;
  text-align: center;
  
  .wrapper {
    margin-bottom: 40px;
    margin-top: 30px;
  }
  
  .svg-position {
    display: block;
    margin: auto;
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