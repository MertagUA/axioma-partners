import styled from "@emotion/styled";
import background from "./assets/images/fade.png";
import backgroundMobile from "./assets/images/fadeMobile.png";
import bg from "./assets/images/bg.webp";
import { theme } from "./utils/theme";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 125px;
  margin: 0 auto;

  @media screen and (max-width: 481px) {
    padding: 0 17px;
  }
`;

export const FooterContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 125px;
  margin: 0 auto;

  @media screen and (max-width: 481px) {
    padding: 0;
  }
`;

export const Background = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FadeBackground = styled.div`
  background-image: url(${background});
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (max-width: 481px) {
    background-image: url(${backgroundMobile});
    background-size: 100% 80%;
  }
`;

export const FooterBackground = styled.div`
  background-color: ${theme.black};
`;
