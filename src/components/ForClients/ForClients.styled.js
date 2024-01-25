import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const Section = styled.section`
  padding: 140px 0 111px;

  @media screen and (max-width: 481px) {
    padding: 75px 0 112px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 108px;

  @media screen and (max-width: 481px) {
    margin-bottom: 60px;
    flex-direction: column-reverse;
  }
`;

export const Title = styled.p`
  color: ${theme.white};
  text-align: right;

  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;

  @media screen and (max-width: 481px) {
    margin-bottom: 24px;
    flex-direction: column-reverse;

    text-align: right;
    font-size: 45px;
  }

  @media screen and (max-width: 325px) {
    font-size: 42px;
  }
`;

export const Description = styled.p`
  max-width: 595px;
  width: 100%;
  color: ${theme.white};

  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const Icon = styled.svg`
  width: 84px;
  height: 84px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 74px;

  @media screen and (max-width: 481px) {
    align-items: center;
    flex-direction: column;
    gap: 60px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 28px;
  max-width: 242px;
  width: 100%;
  height: 364px;

  @media screen and (max-width: 481px) {
    min-height: 268px;
    height: auto;
    max-width: 390px;
    align-items: center;
  }
`;

export const ItemTitle = styled.p`
  color: ${theme.white};

  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 145.455%;
`;

export const ItemDescription = styled.p`
  color: ${theme.white};

  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 177.778%;

  @media screen and (max-width: 481px) {
    text-align: center;
  }
`;
