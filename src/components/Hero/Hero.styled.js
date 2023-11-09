import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const Section = styled.section`
  position: relative;
  padding: 41px 0 181px;

  @media screen and (max-width: 481px) {
    padding: 24px 0 181px;
  }
`;

export const TopText = styled.p`
  max-width: 300px;
  width: 100%;
  margin-bottom: 12px;
  padding-left: 363px;

  color: ${theme.green};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  @media screen and (max-width: 481px) {
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export const Title = styled.p`
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;

  @media screen and (max-width: 481px) {
    margin-bottom: 75px;
    text-align: left;
    font-size: 45px;
    line-height: 111.111%;
  }

  @media screen and (max-width: 340px) {
    font-size: 42px;
  }
`;

export const TitleSpan = styled.span`
  @media screen and (max-width: 481px) {
    display: block;
  }
`;

export const TitleBottom = styled.p`
  margin-top: 15px;
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;
  @media screen and (max-width: 481px) {
    position: absolute;
    top: 145px;
    right: 0;
    font-size: 45px;
    line-height: 177.778%;
    margin-top: 0;
  }

  @media screen and (max-width: 360px) {
    font-size: 39px;
  }
`;

export const Description = styled.p`
  max-width: 591px;
  width: 100%;
  color: ${theme.green};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;

  @media screen and (max-width: 481px) {
    max-width: 316px;
  }

  @media screen and (max-width: 345px) {
    font-size: 17px;
  }

  @media screen and (max-width: 325px) {
    font-size: 16px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;

export const Lines = styled.div`
  position: absolute;
  bottom: 10%;
  right: -50%;

  max-width: 1110px;
  width: 145%;
  height: 82px;
  padding: 8px 0 8px 8px;

  border-radius: 74px;
  border: 1px solid ${theme.green};
`;

export const Button = styled.button`
  max-width: 228px;
  width: 100%;
  height: 66px;
  border: transparent;
  border-radius: 64px;
  background-color: ${theme.green};
  cursor: pointer;
  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  @media screen and (max-width: 481px) {
    max-width: 336px;
    width: 63%;
  }
`;
