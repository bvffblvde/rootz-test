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

  .icon-position {
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

export const Container = styled.div`
  margin: 100px 0 0;
  padding: 0 18px 0;
`;

export const Title = styled.p`
  font-family: 'Poppins', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  color: ${colors.EbonyClay};
  margin: 0 0 20px;
  text-transform: capitalize;
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  color: ${colors.BalticSea};
  mix-blend-mode: normal;
  opacity: 0.9;
  margin: 0 0 32px;
`;