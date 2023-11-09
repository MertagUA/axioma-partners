import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import background from "../../assets/images/backgroundTraffic.svg";
import backgroundMobile from "../../assets/images/backgroundTrafficMobile.svg";
import { theme } from "../../utils/theme";

export const Section = styled.section`
  position: relative;

  max-width: 1920px;
  width: 100%;
  height: 966px;
  margin: 0 auto;
  padding-top: 261px;

  background-image: url(${background});

  @media screen and (max-width: 481px) {
    padding-top: 207px;
    height: 1740px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${backgroundMobile});
  }
`;

export const Title = styled.p`
  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 71px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;

  @media screen and (min-width: 426px) and (max-width: 481px) {
    font-size: 42px;
  }

  @media screen and (max-width: 426px) {
    font-size: 45px;
  }

  @media screen and (max-width: 411px) {
    font-size: 42px;
  }

  @media screen and (max-width: 385px) {
    font-size: 39px;
  }

  @media screen and (max-width: 361px) {
    font-size: 36px;
  }

  @media screen and (max-width: 336px) {
    font-size: 34px;
  }
`;

export const TitleSpan = styled.span`
  @media screen and (max-width: 465px) {
    display: block;
    text-align: right;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 84px;
  left: 161px;

  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 513px;
  width: 100%;
  height: 96px;

  background-color: transparent;
  border: transparent;
  cursor: pointer;

  @media screen and (max-width: 481px) {
    left: 0;
    top: 60px;
  }
`;

export const ButtonText = styled.span`
  margin-right: 15px;

  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;
`;

export const Description = styled.p`
  max-width: 452px;
  width: 100%;
  height: 128px;

  color: ${theme.grey};
  text-align: right;
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;

  @media screen and (max-width: 481px) {
    max-width: 390px;
  }

  @media screen and (max-width: 420px) {
    font-size: 17px;
  }

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }

  @media screen and (max-width: 375px) {
    font-size: 15px;
  }
`;

export const Accent = styled.span`
  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 177.778%;

  @media screen and (max-width: 420px) {
    font-size: 17px;
  }

  @media screen and (max-width: 400px) {
    font-size: 16px;
  }

  @media screen and (max-width: 375px) {
    font-size: 15px;
  }

  @media screen and (max-width: 355px) {
    font-size: 14px;
  }

  @media screen and (max-width: 335px) {
    font-size: 13px;
  }
`;

export const TextWrapper = styled.div`
  @media screen and (min-width: 481px) {
    display: flex;
    align-items: baseline;
  }
`;

export const MiddleWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 84px;
  padding-left: 13px;

  @media screen and (max-width: 481px) {
    display: none;
  }
`;

export const ArrowsWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -32px;
  transform: translateY(-50%);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const IconWrapper1 = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-right: 30px;
`;

export const IconMobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconMobileWrapperLast = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 481px) {
    margin-right: 32px;
  }

  @media screen and (max-width: 345px) {
    margin-right: 28px;
  }

  @media screen and (max-width: 335px) {
    margin-right: 26px;
  }

  @media screen and (max-width: 325px) {
    margin-right: 24px;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IconsMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 481px) {
    display: none;
  }
`;

const slideTop = keyframes`
 0% {
    transform: translateY(-190px);
  }

  100% {
    transform: translateY(0);
  }
`;

const slideBottom = keyframes`
 0% {
    transform: translateY(190px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  position: ${(props) => (props.visible ? "static" : "absolute")};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? "0" : "-120px")});
  transition: opacity 0.5s, transform 0.5s;
`;

export const MidWrapper = styled.div`
  display: flex;
  animation: ${(props) => {
    if (props.animation !== false) {
      return props.visible ? slideBottom : slideTop;
    }
  }};
  animation-duration: 0.5s;
`;

export const BottomWrapper = styled.div`
  display: flex;
  position: ${(props) => (props.visible ? "absolute" : "static")};
  bottom: 0;
  opacity: ${(props) => (props.visible ? 0 : 1)};
  transform: translateY(${(props) => (props.visible ? "240px" : "0")});
  transition: opacity 0.5s, transform 0.5s;
`;
export const IconWrapper2 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 39px;
`;

export const IconWrapper3 = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  margin-right: 30px;
`;

export const IconWrapper4 = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper5 = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  margin-right: 36px;
`;

export const IconWrapper6 = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  margin-right: 34px;
`;

export const IconWrapper7 = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
  margin-right: 33px;
`;

export const IconWrapper8 = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper9 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 64px;
  gap: 31.6px;
`;

export const IconWrapper10 = styled.div`
  display: flex;
  align-items: center;
  gap: 63px;
`;

export const LeftBox = styled.div`
  position: absolute;
  @media screen and (min-width: 481px) {
    top: 55%;
    right: 0;
  }
  max-width: 512px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 128px;
  padding: 16px 0 16px 31px;
  margin-top: 43px;
  border-radius: 24px 0px 0px 24px;
  background: ${theme.grey};

  @media screen and (max-width: 481px) {
    left: 0;
    bottom: 6%;
    max-width: 408px;
    margin-top: 0;
    align-items: start;
    padding: 16px 0 16px 21px;
    border-radius: 0px 24px 24px 0px;
  }
`;

export const LeftBoxText = styled.p`
  max-width: 355px;
  width: 100%;
  color: ${theme.green};

  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;

  @media screen and (max-width: 405px) {
    font-size: 16px;
  }
`;

export const LeftBoxAccent = styled.span`
  font-weight: 700;
`;
