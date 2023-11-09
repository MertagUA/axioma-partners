import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const FooterStyled = styled.footer`
  padding: 64px 0 36px;
  background-color: ${theme.black};

  @media screen and (max-width: 481px) {
    padding: 40px 0 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 481px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

export const Image = styled.img`
  @media screen and (max-width: 481px) {
    display: none;
  }
`;

export const ImageMobile = styled.img`
  @media screen and (min-width: 481px) {
    display: none;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 481px) {
    align-items: center;
    gap: 12px;
  }
`;

export const LeftText = styled.p`
  max-width: 421px;
  width: 100%;
  color: ${theme.lightGrey};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;

  @media screen and (max-width: 481px) {
    max-width: 391px;
    margin-bottom: 24px;

    text-align: center;
  }
`;

export const RightWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: end;
  flex-direction: column;
  gap: 24px;

  @media screen and (max-width: 481px) {
    align-items: center;
    gap: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 231px;
  width: 100%;
  height: 68px;
  cursor: pointer;
  border: transparent;
  border-radius: 64px;
  background-color: ${theme.green};
  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 200%;

  @media screen and (max-width: 481px) {
    max-width: 310px;
    margin-bottom: 24px;
  }
`;

export const Mail = styled.a`
  color: ${theme.lightGrey};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  cursor: pointer;

  @media screen and (max-width: 481px) {
    margin-bottom: 6px;

    font-size: 16px;
    font-weight: 400;
    line-height: 162.5%;
    text-decoration-line: underline;
  }
`;

export const RightText = styled.p`
  color: ${theme.lightGrey};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  @media screen and (max-width: 481px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 162.5%;
  }
`;

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-top: 29px;
  border-top: 2px solid #626262;

  @media screen and (max-width: 481px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 32px;
    padding-top: 9px;
  }
`;

export const GreyText = styled.p`
  color: #a3a3a3;

  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  @media screen and (max-width: 481px) {
    color: #888;
    font-size: 13px;
    font-weight: 500;
    line-height: 246.154%;
  }
`;
