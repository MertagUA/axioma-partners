import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import { keyframes } from "@emotion/react";

export const Section = styled.section`
  padding: 100px 0;

  @media screen and (max-width: 481px) {
    padding: 70px 0;
  }
`;

export const Title = styled.p`
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;

  @media screen and (max-width: 481px) {
    font-size: 46px;
  }

  @media screen and (max-width: 450px) {
    font-size: 42px;
  }

  @media screen and (max-width: 425px) {
    font-size: 40px;
  }

  @media screen and (max-width: 415px) {
    font-size: 38px;
  }

  @media screen and (max-width: 385px) {
    font-size: 36px;
  }

  @media screen and (max-width: 365px) {
    font-size: 34px;
  }

  @media screen and (max-width: 340px) {
    font-size: 32px;
  }
`;

export const Accent = styled.span`
  background: linear-gradient(149deg, #0495ff 0%, #18c8ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  max-width: 761px;
  width: 100%;
  margin-left: auto;
  margin-top: 12px;
  color: ${theme.white};
  text-align: right;
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;

  @media screen and (max-width: 481px) {
    display: none;
  }
`;

export const DescriptionMobile = styled.p`
  color: ${theme.white};
  text-align: right;

  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
  margin-top: 24px;

  @media screen and (min-width: 481px) {
    display: none;
  }

  @media screen and (max-width: 380px) {
    font-size: 17px;
  }

  @media screen and (max-width: 350px) {
    font-size: 15px;
  }
`;

export const DescriptionAccent = styled.span`
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 177.778%;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  margin-top: 72px;
  gap: 30px;

  @media screen and (max-width: 481px) {
    align-items: center;
    flex-direction: column;
    margin-top: 48px;
    gap: 18px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const slideDown = keyframes`
 0% {
    top: -130px;
    left: -60%;
  }

  100%{
    top: 440px;
    left: -40%;
  }
`;

const fill = keyframes`
 0% {
    background: linear-gradient(149deg, #0495FF 100%, #18C8FF 100%);
    }
   25% {
    background: linear-gradient(149deg, #0495FF 75%, #18C8FF 100%);
  }
  50% {
    background: linear-gradient(149deg, #0495FF 50%, #18C8FF 100%);
  }
   75% {
    background: linear-gradient(149deg, #0495FF 25%, #18C8FF 100%);
  }
  100% {
    background: linear-gradient(149deg, #0495ff 0%, #18c8ff 100%);
  }
`;

export const Item = styled.div`
  position: relative;
  max-width: 290px;
  width: 100%;
  height: 340px;
  padding: 47px 0 0 34px;
  overflow: hidden;
  border-radius: 0px 143.5px 0px 0px;
  background: linear-gradient(149deg, #0495ff 100%, #18c8ff 100%);
  &:hover {
    // animation: ${fill} 0.1s forwards;

    ::before {
      content: "";
      position: absolute;
      top: -122px;
      left: -60%;
      width: 572.741px;
      height: 57px;
      transform: rotate(-30deg);
      opacity: 0.2;
      background: #fff;
      animation: ${slideDown};
      animation-duration: 0.8s;
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
  }

  @media screen and (max-width: 481px) {
    padding: 24px 0 18px 34px;
    max-width: 390px;
    width: 100%;
    height: 252px;
  }

  @media screen and (max-width: 340px) {
    height: 268px;
  }
`;

export const IconFirst = styled.svg`
  width: 64px;
  height: 64px;
  fill: none;
  margin-left: 11px;

  media screen and (max-width: 481px) {
    margin-left: 0;
  }
`;

export const Icon = styled.svg`
  width: 64px;
  height: 64px;
  margin-left: 11px;
  margin-bottom: 26px;

  @media screen and (max-width: 481px) {
    margin-bottom: 8px;
    margin-left: 0;
  }
`;

export const LastItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;
  max-width: 230px;
  width: 100%;
  height: 340px;
  padding: 47px 23px 0 0;
  border-radius: 143.5px 0px 0px 0px;
  overflow: hidden;
  background: linear-gradient(149deg, #0495ff 100%, #18c8ff 100%);
  &:hover {
    // animation: ${fill} 0.1s forwards;

    ::before {
      content: "";
      position: absolute;
      top: -122px;
      left: -60%;
      width: 572.741px;
      height: 57px;
      transform: rotate(-30deg);
      opacity: 0.2;
      background: #fff;
      animation: ${slideDown};
      animation-duration: 0.8s;
      animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
  }

  @media screen and (max-width: 481px) {
    display: none;
  }
`;

export const ItemTitle = styled.p`
  margin-bottom: 8px;
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0em;
  text-align: left;
`;

export const LastIcon = styled.svg`
  width: 64px;
  height: 64px;
  margin-bottom: 26px;
`;

export const LastItemDescription = styled.p`
  margin-bottom: 26px;
  color: rgba(255, 255, 255, 0.8);
  text-align: right;
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 156%;
`;

export const ItemDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);

  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 156%;
  @media screen and (max-width: 481px) {
    max-width: 337px;
    width: 100%;
  }
`;

export const Comma = styled.img`
  position: absolute;
  bottom: -2%;
  right: 7%;
  width: 72px;
  height: 57.5px;
`;

export const Button = styled.button`
  max-width: 230px;
  width: 100%;
  height: 46px;
  margin-right: -40px;
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.375%;
  background-color: transparent;
  border: transparent;
  cursor: pointer;
`;

export const ArrowText = styled.p`
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.375%;
`;
