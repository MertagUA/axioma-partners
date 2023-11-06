import styled from "@emotion/styled";
import background from "./assets/images/fade.png";
import bg from "./assets/images/bg.webp";
import { theme } from "./utils/theme";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0 125px;
  margin: 0 auto;
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
`;

export const FooterBackground = styled.div`
  background-color: ${theme.black};
`;
