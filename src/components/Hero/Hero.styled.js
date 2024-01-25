import styled from "@emotion/styled";
import { theme } from "../../utils/theme";

export const Section = styled.section`
  position: relative;
  padding: 41px 0 181px;

  @media screen and (max-width: 481px) {
    padding: 24px 0 181px;
  }
`;

export const TopText = styled.p`
  max-width: 300px;
  width: 100%;
  margin-bottom: 12px;
  padding-left: 363px;

  color: ${theme.green};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  @media screen and (max-width: 481px) {
    margin-bottom: 0;
    padding-left: 0;
  }
`;

export const Title = styled.p`
  color: ${theme.white};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;

  @media screen and (max-width: 481px) {
    margin-bottom: 80px;
    text-align: left;
    font-size: 33px;
    line-height: 111.111%;
    max-width: ${(props) => (props.language === "en" ? "160px" : "225px ")};
    width: 100%;
  }

  // @media screen and (max-width: 420px) {
  //   font-size: ${(props) => (props.language === "pl" ? "36px" : "45px")};
  // }

  // @media screen and (max-width: 390px) {
  // font-size: props) =>
  // props.language === "en"
  // ? "40px"
  // : props.language === "pl"
  // ? "32px"
  // : props.language === "nl"
  // ? "38px"
  // : "42px"};
  // }

  // @media screen and (max-width: 345px) {
  //   font-size: (props) =>
  //     props.language === "en"
  //       ? "36px"
  //       : props.language === "pl"
  //       ? "30px"
  //       : props.language === "nl"
  //       ? "34px"
  //       : "42px"};
  // }

  // @media screen and (max-width: 325px) {
  //   font-size: (props) =>
  //     props.language === "pl"
  //       ? "29px"
  //       : props.language === "dk"
  //       ? "37px"
  //       : props.language === "nl"
  //       ? "34px"
  //       : "39px"};
  // }
`;

export const TitleSpan = styled.span`
  @media screen and (max-width: 481px) {
    display: block;
  }
`;

export const TitleBottom = styled.p`
  margin-top: 15px;
  color: ${theme.green};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 85.106%;
  text-align: right;
  @media screen and (max-width: 481px) {
    width: 200px;
    position: absolute;
    top: ${(props) => (props.language === "pl" ? "65px" : "100px")};
    right: 0;
    font-size: 42px;
    line-height: 85.106%;
    margin-top: 0;
  }

  // @media screen and (max-width: 420px) {
  //   font-size: ${(props) => (props.language === "pl" ? "36px" : "45px")};
  // }

  // @media screen and (max-width: 390px) {
  //   font-size: {(props) =>
  //     props.language === "en"
  //       ? "40px"
  //       : props.language === "pl"
  //       ? "32px"
  //       : props.language === "nl"
  //       ? "38px"
  //       : "42px"};
  //   top: {(props) =>
  //     props.language === "pl"
  //       ? "120px"
  //       : props.language === "nl"
  //       ? "125px"
  //       : "135px"};
  // }

  // @media screen and (max-width: 360px) {
  //   font-size: {(props) =>
  //     props.language === "en"
  //       ? "36px"
  //       : props.language === "pl"
  //       ? "32px"
  //       : "39px"};
  // }

  // @media screen and (max-width: 345px) {
  //   top: {(props) =>
  //     props.language === "pl"
  //       ? "115px"
  //       : props.language === "nl"
  //       ? "120px"
  //       : "130px"};
  //   font-size: {(props) =>
  //     props.language === "pl"
  //       ? "30px"
  //       : props.language === "en"
  //       ? "36px"
  //       : props.language === "nl"
  //       ? "34px"
  //       : "39px"};
  // }

  //   @media screen and (max-width: 325px) {
  //     font-size: {(props) =>
  //       props.language === "pl"
  //         ? "29px"
  //         : props.language === "dk"
  //         ? "37px"
  //         : props.language === "en"
  //         ? "36px"
  //         : props.language === "nl"
  //         ? "34px"
  //         : "39px"};
  //   }
  //
`;

export const Description = styled.p`
  max-width: 410px;
  width: 100%;
  color: ${theme.green3};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;

  @media screen and (max-width: 481px) {
    max-width: 316px;
  }

  @media screen and (max-width: 345px) {
    font-size: 17px;
  }

  @media screen and (max-width: 325px) {
    font-size: 16px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3px;
`;

export const Lines = styled.div`
  position: absolute;
  bottom: 10%;
  right: -50%;

  max-width: 1110px;
  width: 145%;
  height: 82px;
  padding: 8px 0 8px 8px;

  border-radius: 74px;
  border: 1px solid ${theme.green};
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 228px;
  width: 100%;
  height: 66px;
  border: transparent;
  border-radius: 64px;
  background-color: ${theme.green};
  cursor: pointer;
  color: ${theme.grey};
  font-family: "Gilroy", "Montserrat", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;

  @media screen and (max-width: 481px) {
    max-width: 336px;
    width: 63%;
  }
`;
