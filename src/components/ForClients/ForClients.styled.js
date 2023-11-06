import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const Section = styled.section`
  padding: 140px 0 111px;
`;

export const TextWrapper = styled.div`
  display: flex;
  margin-bottom: 108px;
`;

export const Title = styled.p`
  color: ${theme.white};
  text-align: right;

  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;
`;

export const Description = styled.p`
  max-width: 595px;
  width: 100%;
  color: ${theme.white};

  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const Icon = styled.svg`
  width: 84px;
  height: 84px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 74px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 28px;
  max-width: 242px;
  width: 100%;
  height: 364px;
`;

export const ItemTitle = styled.p`
  color: ${theme.white};

  font-family: "Axiforma";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 145.455%;
`;

export const ItemDescription = styled.p`
  color: ${theme.white};

  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;
