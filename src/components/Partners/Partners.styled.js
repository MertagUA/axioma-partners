import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import { keyframes } from "@emotion/react";

export const Section = styled.section`
  padding: 100px 0 141px;

  @media screen and (max-width: 481px) {
    padding: 0 0 80px;
  }
`;

export const Title = styled.p`
  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.11%;
  text-align: right;
  background: linear-gradient(149deg, #0495ff 0%, #18c8ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 481px) {
    font-size: 45px;
  }

  @media screen and (max-width: 340px) {
    font-size: 42px;
  }
`;

export const Accent = styled.span`
  color: ${theme.white};
  -webkit-text-fill-color: ${theme.white};

  @media screen and (max-width: 481px) {
    display: block;
  }
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

  @media screen and (max-width: 481px) {
    flex-wrap: wrap;
  }
`;
export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
  height: 130px;
  margin-top: 50px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 481px) {
    width: 46%;
    margin-top: 45px;
  }
`;

export const IconsWrapperLast = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
  height: 130px;
  margin-top: 50px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 481px) {
    display: none;
  }
`;

const rightTopIcon1Slide = keyframes`
0%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


10%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

30%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

40%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 1;
}


41%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}


55%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}


70%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}


85%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

100%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}
`;

const rightTopIcon2Slide = keyframes`
0%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}


10%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

20%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}

36%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}


51%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

76%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

85%{
  top: 0;
  left: 150%;
  transform: translateX(-50%);
  opacity: 1;
}

86%{
  top: 0;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}

100%{
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
`;

const rightTopIcon3Slide = keyframes`
0%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


10%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

30%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

40%{
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


41%{
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}


55%{
  top: 0%;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}


70%{
  top: 0%;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}


85%{
  top: 0%;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}

100%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}
`;

const rightTopIcon4Slide = keyframes`
0%{
  top: 0%;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}


10%{
  top: 0%;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}

20%{
  top: 0%;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}

36%{
  top: 0%;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}


51%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

76%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

85%{
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

86%{
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

100%{
  top: 0;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}
`;

const rightTopIcon7Slide = keyframes`
0%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


10%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

30%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

40%{
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


41%{
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}


55%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}


70%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}


85%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}

100%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}
`;

const rightTopIcon8Slide = keyframes`
0%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}


10%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}

20%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}

36%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}


51%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

76%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

85%{
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

86%{
  top: 150;
  left: 0%;
  transform: translateX(-50%);
  opacity: 0;
}

100%{
  top: 0;
  left: 150%;
  transform: translateX(-50%);
  opacity: 0;
}
`;

const rightTopIcon9Slide = keyframes`
0%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


10%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

30%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

40%{
  top: 0;
  left: -100%;
  transform: translateX(-50%);
  opacity: 1;
}


41%{
  top: 0;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}


55%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}


70%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}


85%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

100%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}
`;

const rightTopIcon10Slide = keyframes`
0%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}


10%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

20%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

36%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}


51%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

76%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

85%{
  top: 0;
  left: -100%;
  transform: translateX(-50%);
  opacity: 1;
}

86%{
  top: 0;
  left: -100%;
  transform: translateX(-50%);
  opacity: 0;
}

100%{
  top: -150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}
`;

export const Icon1 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon1Slide} 8s infinite;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon2 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rightTopIcon2Slide} 8s infinite;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon3 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon3Slide} 8s infinite;
  animation-delay: 0.2s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon4 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 0s;
  left: -100%;
  transform: translate(-50%, -50%);
  animation: ${rightTopIcon4Slide} 8s infinite;
  animation-delay: 0.2s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon5 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon1Slide} 8s infinite;
  animation-delay: 0.3s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon6 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rightTopIcon2Slide} 8s infinite;
  animation-delay: 0.3s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon7 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon7Slide} 8s infinite;
  animation-delay: 0.4s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon8 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  animation: ${rightTopIcon8Slide} 8s infinite;
  animation-delay: 0.4s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon9 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon9Slide} 8s infinite;
  animation-delay: 0.5s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;

export const Icon10 = styled.svg`
  position: absolute;
  width: 190px;
  height: 117px;
  opacity: 1;
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon10Slide} 8s infinite;
  animation-delay: 0.5s;

  @media screen and (max-width: 481px) {
    max-width: 190px;
    width: 100%;
    height: 117px;
  }
`;
