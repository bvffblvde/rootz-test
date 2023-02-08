import {colors, sizes} from "../../theme/default/styles";
import styled from "styled-components";

export const StartedCardContainer = styled.div`
  background: ${colors.WaxFlower};
  border-radius: 20px;
  padding: 42px 18px 56px;
  display: block;
  
  .title-block {
    width: 100%;

    @media (min-width: ${sizes.tablet}px) {
      padding-top: 5%;
      width: 50%;
    }
  }
  
  @media (min-width: ${sizes.tablet}px) {
    padding: 104px 80px;
    display: flex;
    justify-content: space-between;
  }
  
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 150%;
  text-transform: capitalize;
  margin: 0 0 20px;
  color: ${colors.EbonyClay};
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 40px;
    line-height: 56px;
    text-align: left;
    margin: 0 0 40px;
  }
`;

export const SubTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 175%;
  opacity: 0.9;
  color: ${colors.BalticSea};
  margin: 0 0 55px;
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const Container = styled.div`
  background: ${colors.HintOfRed};
  border-radius: 16px;
  padding: 40px 24px;
  
  .form-field-area {
    display: grid;
  }
  
  @media (min-width: ${sizes.tablet}px) {
    width: 40%;
  }
`;

export const TitleForm = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-transform: capitalize;
  margin: 0 0 24px;
  text-align: center;
  
  @media (min-width: ${sizes.tablet}px) {
    font-size: 32px;
    line-height: 56px;
  }
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