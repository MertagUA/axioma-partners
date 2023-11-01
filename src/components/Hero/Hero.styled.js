import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const Section = styled.section`
  position: relative;
  height: 341px;
  padding: 41px 0 128px;
`;

export const TopText = styled.p`
  width: 300px;
  margin-bottom: 12px;
  padding-left: 111px;

  color: ${theme.green};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

export const HeroTitle = styled.p`
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 94px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;
`;

export const HeroTitleBottom = styled.p`
  margin-top: 15px;
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 94px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;
`;

export const HeroDescription = styled.p`
  width: 488px;
  color: ${theme.green};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const HeroTextWrapper = styled.div`
  display: flex;
  gap: 23px;
  margin-top: 3px;
`;

export const HeroLines = styled.div`
  position: absolute;
  bottom: -34px;
  right: -275px;

  width: 671px;
  height: 82px;
  padding: 8px 0 8px 8px;

  border-radius: 74px;
  border: 1px solid ${theme.green};
`;

export const HeroButton = styled.button`
  width: 228px;
  height: 66px;
  border: transparent;
  border-radius: 64px;
  background-color: ${theme.green};

  color: ${theme.grey};

  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;
