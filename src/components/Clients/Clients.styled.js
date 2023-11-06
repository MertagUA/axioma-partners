import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import { keyframes } from "@emotion/react";

export const Section = styled.section`
  padding: 100px 0;
`;

export const Title = styled.p`
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;
`;

export const Accent = styled.span`
  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;
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
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const DescriptionAccent = styled.span`
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 177.778%;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  margin-top: 72px;
  gap: 30px;
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
  padding: 47px 0 0 23px;
  overflow: hidden;
  border-radius: 0px 143.5px 0px 0px;
  background: linear-gradient(149deg, #0495ff 100%, #18c8ff 100%);
  &:hover {
    animation: ${fill} 0.1s forwards;

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
`;

export const IconFirst = styled.svg`
  width: 64px;
  height: 64px;
  fill: none;
  margin-left: 11px;
`;

export const Icon = styled.svg`
  width: 64px;
  height: 64px;
  margin-left: 11px;
  margin-bottom: 26px;
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
    animation: ${fill} 0.1s forwards;

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
`;

export const ItemTitle = styled.p`
  margin-bottom: 8px;
  color: ${theme.white};
  font-family: "Axiforma";
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
  font-family: "Axiforma";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 156%;
`;

export const ItemDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);

  font-family: "Axiforma";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 156%;
`;

export const Comma = styled.img`
  position: absolute;
  bottom: -2%;
  right: 7%;
  width: 72px;
  height: 57.5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 230px;
  width: 100%;
  height: 46px;
  margin-right: -40px;
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 159.375%;
  background-color: transparent;
  border: transparent;
`;
