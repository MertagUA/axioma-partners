import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const FooterStyled = styled.footer`
  padding: 64px 0 36px;
  background-color: ${theme.black};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  gap: 24px;
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
`;

export const RightWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  flex-direction: column;
  gap: 24px;
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
`;

export const Mail = styled.a`
  color: ${theme.lightGrey};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
  cursor: pointer;
`;

export const RightText = styled.p`
  color: ${theme.lightGrey};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
