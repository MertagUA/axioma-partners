import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import { keyframes } from "@emotion/react";

export const Section = styled.section`
  padding: 100px 0 141px;
`;

export const Title = styled.p`
  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 11.111%;
  text-align: right;
  background: linear-gradient(149deg, #0495ff 0%, #18c8ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Accent = styled.span`
  color: ${theme.white};

  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;
  -webkit-text-fill-color: ${theme.white};
`;

export const Description = styled.p`
  max-width: 809px;
  margin-top: 12px;
  width: 100%;
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
  color: ${theme.white};
`;
export const AnimatedIconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const IconsWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 75px;
  overflow: hidden;
  position: relative;
`;

const rightTopSlide = keyframes`
0%{
  top: 0;
  left: 0;
}`;

export const Icon1 = styled.svg`
  // position: absolute;
  // top: 0;
  // left: 0;
`;
