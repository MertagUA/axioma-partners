import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const Section = styled.section`
  position: relative;
  padding: 41px 0 181px;
`;

export const TopText = styled.p`
  max-width: 300px;
  width: 100%;
  margin-bottom: 12px;
  padding-left: 111px;

  color: ${theme.green};
  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;

export const Title = styled.p`
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 94px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;
`;

export const TitleBottom = styled.p`
  margin-top: 15px;
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 94px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;
`;

export const Description = styled.p`
  max-width: 488px;
  width: 100%;
  color: ${theme.green};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 23px;
  margin-top: 3px;
`;

export const Lines = styled.div`
  position: absolute;
  bottom: 10%;
  right: -50%;

  max-width: 1110px;
  width: 100%;
  height: 82px;
  padding: 8px 0 8px 8px;

  border-radius: 74px;
  border: 1px solid ${theme.green};
`;

export const Button = styled.button`
  max-width: 228px;
  width: 100%;
  height: 66px;
  border: transparent;
  border-radius: 64px;
  background-color: ${theme.green};
  cursor: pointer;

  color: ${theme.grey};

  font-family: "Axiforma";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`;
