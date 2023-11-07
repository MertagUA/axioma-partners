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
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
  height: 130px;
  margin-top: 50px;
  overflow: hidden;
  position: relative;
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

20%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

35%{
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  opacity: 1;
}


36%{
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

71%{
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

20%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

35%{
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


36%{
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

71%{
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

20%{
  top: 0%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

35%{
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}


36%{
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

71%{
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

20%{
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 1;
}

35%{
  top: 0;
  left: -100%;
  transform: translateX(-50%);
  opacity: 1;
}


36%{
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

71%{
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
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon1Slide} 6s infinite;
`;

export const Icon2 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rightTopIcon2Slide} 6s infinite;
`;

export const Icon3 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon3Slide} 6s infinite;
  animation-delay: 0.2s;
`;

export const Icon4 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 0s;
  left: -100%;
  transform: translate(-50%, -50%);
  animation: ${rightTopIcon4Slide} 6s infinite;
  animation-delay: 0.2s;
`;

export const Icon5 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon1Slide} 6s infinite;
  animation-delay: 0.3s;
`;

export const Icon6 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 150%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${rightTopIcon2Slide} 6s infinite;
  animation-delay: 0.3s;
`;

export const Icon7 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon7Slide} 6s infinite;
  animation-delay: 0.4s;
`;

export const Icon8 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 0%;
  left: 150%;
  transform: translateX(-50%);
  animation: ${rightTopIcon8Slide} 6s infinite;
  animation-delay: 0.4s;
`;

export const Icon9 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon9Slide} 6s infinite;
  animation-delay: 0.5s;
`;

export const Icon10 = styled.svg`
  position: absolute;
  opacity: 1;
  top: 150%;
  left: 50%;
  transform: translateX(-50%);
  animation: ${rightTopIcon10Slide} 6s infinite;
  animation-delay: 0.5s;
`;
