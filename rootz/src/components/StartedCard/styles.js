import {colors} from "../../theme/default/styles";
import styled from "styled-components";

export const StartedCardContainer = styled.div`
  background: ${colors.WaxFlower};
  border-radius: 20px;
  padding: 42px 18px 56px;
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  text-transform: capitalize;
  margin: 0 0 20px;
  color: ${colors.EbonyClay};
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  opacity: 0.9;
  color: ${colors.BalticSea};
  margin: 0 0 55px;
`;

export const Container = styled.div`
  background: ${colors.HintOfRed};
  border-radius: 16px;
  padding: 40px 24px;
  
  .form-field-area {
    display: grid;
  }
`;

export const TitleForm = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0 0 24px;
  text-align: center;
`;

export const FormField = styled.input`
  border: none;
  border-radius: 40px;
  background: ${colors.White};
  color: ${colors.Gray};
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  padding: 12px 24px;
  margin-bottom: 16px;
`;