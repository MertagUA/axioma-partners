import {
  ButtonText,
  Button,
  Section,
  Title,
  Description,
  Accent,
  TextWrapper,
  MiddleWrapper,
  ArrowsWrapper,
  IconWrapper1,
  IconsWrapper,
  TopWrapper,
  IconWrapper2,
  IconWrapper3,
  IconWrapper4,
  IconWrapper5,
  IconWrapper6,
  IconWrapper7,
  IconWrapper8,
  LeftBox,
  LeftBoxText,
  IconWrapper9,
  IconWrapper10,
  BottomWrapper,
  MidWrapper,
  IconMobileWrapper,
  IconMobileWrapperLast,
  LeftBoxAccent,
  IconsMobileWrapper,
} from "./Traffic.styled";
import sprite from "../../assets/images/sprite.svg";
import { Container } from "../../App.styled";
import { Link } from "react-scroll";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Traffic = () => {
  const [iconsBottom, setIconsBottom] = useState(false);
  const [oneAnimation, setOneAnimation] = useState(false);

  const { t } = useTranslation();

  return (
    <Section name="traffic">
      <Container>
        <Link to="traffic" spy={true} smooth={true} duration={300}>
          <Button type="button">
            <ButtonText>{t("trafficButton")}</ButtonText>
            <svg width={32} height={32}>
              <use href={sprite + "#icon-arrowDown"}></use>
            </svg>
          </Button>
        </Link>
        <Title className="wow animate__animated animate__fadeInUp">
          {t("trafficTitleOne")}
        </Title>
        <TextWrapper>
          <Title className="wow animate__animated animate__fadeInUp">
            {t("trafficTitleTwo")}
          </Title>
          <Description className="wow animate__animated animate__fadeInUp">
            {t("trafficDescription")}
            <Accent>
              YouTube, TikTok, Instagram {t("trafficAnd")} Facebook{" "}
            </Accent>
            {t("trafficAndSoOn")}
          </Description>
        </TextWrapper>
        <MiddleWrapper>
          <ArrowsWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="72"
              viewBox="0 0 24 72"
              fill="none"
              onClick={() => {
                setIconsBottom(false);
              }}
              style={{
                opacity: iconsBottom ? "1" : "0.2",
                transition: "opacity 0.5s",
                cursor: iconsBottom ? "pointer" : "not-allowed",
              }}
            >
              <path
                d="M13.0607 0.939339C12.4749 0.353554 11.5251 0.353554 10.9393 0.939339L1.39341 10.4853C0.807619 11.0711 0.807619 12.0208 1.39341 12.6066C1.97919 13.1924 2.92894 13.1924 3.51473 12.6066L12 4.12132L20.4853 12.6066C21.0711 13.1924 22.0208 13.1924 22.6066 12.6066C23.1924 12.0208 23.1924 11.0711 22.6066 10.4853L13.0607 0.939339ZM13.5 72L13.5 2L10.5 2L10.5 72L13.5 72Z"
                fill="url(#paint0_linear_253_3886)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_253_3886"
                  x1="12.0001"
                  y1="2"
                  x2="12"
                  y2="72"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C2B2E" />
                  <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="72"
              viewBox="0 0 24 72"
              fill="none"
              onClick={() => {
                setIconsBottom(true);
                setOneAnimation(true);
              }}
              style={{
                opacity: iconsBottom ? "0.2" : "1",
                transition: "opacity 0.5s",
                cursor: iconsBottom ? "not-allowed" : "pointer",
              }}
            >
              <path
                d="M10.9393 71.0607C11.5251 71.6464 12.4749 71.6464 13.0607 71.0607L22.6066 61.5147C23.1924 60.9289 23.1924 59.9792 22.6066 59.3934C22.0208 58.8076 21.0711 58.8076 20.4853 59.3934L12 67.8787L3.51472 59.3934C2.92893 58.8076 1.97918 58.8076 1.3934 59.3934C0.807609 59.9792 0.807609 60.9289 1.3934 61.5147L10.9393 71.0607ZM10.5 -6.55671e-08L10.5 70L13.5 70L13.5 6.55671e-08L10.5 -6.55671e-08Z"
                fill="url(#paint0_linear_282_1265)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_282_1265"
                  x1="11.9999"
                  y1="70"
                  x2="12"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C2B2E" />
                  <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </ArrowsWrapper>
          <IconsWrapper>
            <TopWrapper visible={!iconsBottom}>
              <IconWrapper1>
                <svg width={119} height={26.6}>
                  <use href={sprite + "#icon-youtube"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 0L2.00001 174"
                    stroke="url(#paint0_linear_253_3905)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_253_3905"
                      x1="2.49987"
                      y1="4.98851e-10"
                      x2="2.5"
                      y2="174"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper1>
              <IconWrapper2>
                <svg width={129} height={34}>
                  <use href={sprite + "#icon-instagram"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 0L2.00001 174"
                    stroke="url(#paint0_linear_305_949)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_305_949"
                      x1="2.49987"
                      y1="4.98851e-10"
                      x2="2.5"
                      y2="174"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper2>
              <IconWrapper3>
                <svg width={112.5} height={32.8}>
                  <use href={sprite + "#icon-tiktok"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 0L2.00001 174"
                    stroke="url(#paint0_linear_305_960)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_305_960"
                      x1="2.49987"
                      y1="4.98851e-10"
                      x2="2.5"
                      y2="174"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper3>
              <IconWrapper4>
                <svg width={129} height={25}>
                  <use href={sprite + "#icon-facebook"}></use>
                </svg>
              </IconWrapper4>
            </TopWrapper>
            <MidWrapper visible={iconsBottom} animation={oneAnimation}>
              <IconWrapper5>
                <svg width={119.5} height={38.5}>
                  <use href={sprite + "#icon-viber"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 2L2.00001 176"
                    stroke="url(#paint0_linear_305_987)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_305_987"
                      x1="2.49987"
                      y1="2"
                      x2="2.5"
                      y2="176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper5>
              <IconWrapper6>
                <svg width={118} height={32.3}>
                  <use href={sprite + "#icon-gmail"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 2L2.00001 176"
                    stroke="url(#paint0_linear_310_1002)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_310_1002"
                      x1="2.49987"
                      y1="2"
                      x2="2.5"
                      y2="176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper6>
              <IconWrapper7>
                <svg width={121.9} height={40.1}>
                  <use href={sprite + "#icon-google"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 2L2.00001 176"
                    stroke="url(#paint0_linear_310_1012)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_310_1012"
                      x1="2.49987"
                      y1="2"
                      x2="2.5"
                      y2="176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper7>
              <IconWrapper8>
                <svg width={124} height={34}>
                  <use href={sprite + "#icon-telegram"}></use>
                </svg>
              </IconWrapper8>
            </MidWrapper>
            <BottomWrapper visible={!iconsBottom}>
              <IconWrapper9>
                <svg width={122} height={38.3}>
                  <use href={sprite + "#icon-notification"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 2L2.00001 176"
                    stroke="url(#paint0_linear_305_987)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_305_987"
                      x1="2.49987"
                      y1="2"
                      x2="2.5"
                      y2="176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper9>
              <IconWrapper10>
                <svg width={63} height={63}>
                  <use href={sprite + "#icon-sms"}></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4"
                  height="176"
                  viewBox="0 0 4 176"
                  fill="none"
                >
                  <path
                    d="M2 2L2.00001 176"
                    stroke="url(#paint0_linear_305_987)"
                    strokeOpacity="0.4"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_305_987"
                      x1="2.49987"
                      y1="2"
                      x2="2.5"
                      y2="176"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#2C2B2E" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#2C2B2E" />
                      <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </IconWrapper10>
            </BottomWrapper>
          </IconsWrapper>
        </MiddleWrapper>
        <IconsMobileWrapper>
          <IconMobileWrapper>
            <svg width={119} height={26.6} style={{ marginRight: "35px" }}>
              <use href={sprite + "#icon-youtube"}></use>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="178"
              viewBox="0 0 3 178"
              fill="none"
              style={{ marginRight: "31px" }}
            >
              <path
                d="M1.5 1.62952L1.50001 175.63"
                stroke="url(#paint0_linear_210_4078)"
                strokeOpacity="0.4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_210_4078"
                  x1="1.99987"
                  y1="1.62952"
                  x2="2"
                  y2="175.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C2B2E" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#2C2B2E" />
                  <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg width={129} height={34}>
              <use href={sprite + "#icon-instagram"}></use>
            </svg>
          </IconMobileWrapper>
          <IconMobileWrapper>
            <svg width={112.5} height={32.8} style={{ marginRight: "38.5px" }}>
              <use href={sprite + "#icon-tiktok"}></use>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="178"
              viewBox="0 0 3 178"
              fill="none"
              style={{ marginRight: "30.5px" }}
            >
              <path
                d="M1.5 1.62952L1.50001 175.63"
                stroke="url(#paint0_linear_210_4078)"
                strokeOpacity="0.4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_210_4078"
                  x1="1.99987"
                  y1="1.62952"
                  x2="2"
                  y2="175.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C2B2E" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#2C2B2E" />
                  <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg width={129} height={25}>
              <use href={sprite + "#icon-facebook"}></use>
            </svg>
          </IconMobileWrapper>
          <IconMobileWrapper>
            <svg width={119.5} height={38.5} style={{ marginRight: "35px" }}>
              <use href={sprite + "#icon-viber"}></use>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="178"
              viewBox="0 0 3 178"
              fill="none"
              style={{ marginRight: "36px" }}
            >
              <path
                d="M1.5 1.62952L1.50001 175.63"
                stroke="url(#paint0_linear_210_4078)"
                strokeOpacity="0.4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_210_4078"
                  x1="1.99987"
                  y1="1.62952"
                  x2="2"
                  y2="175.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C2B2E" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#2C2B2E" />
                  <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg width={118} height={32.3}>
              <use href={sprite + "#icon-gmail"}></use>
            </svg>
          </IconMobileWrapper>
          <IconMobileWrapper>
            <svg width={121.9} height={40.1} style={{ marginRight: "34px" }}>
              <use href={sprite + "#icon-google"}></use>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="178"
              viewBox="0 0 3 178"
              fill="none"
              style={{ marginRight: "33px" }}
            >
              <path
                d="M1.5 1.62952L1.50001 175.63"
                stroke="url(#paint0_linear_210_4078)"
                strokeOpacity="0.4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_210_4078"
                  x1="1.99987"
                  y1="1.62952"
                  x2="2"
                  y2="175.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C2B2E" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#2C2B2E" />
                  <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg width={124} height={34}>
              <use href={sprite + "#icon-telegram"}></use>
            </svg>
          </IconMobileWrapper>
          <IconMobileWrapperLast>
            <svg width={128} height={43.8} style={{ marginRight: "31px" }}>
              <use href={sprite + "#icon-notification"}></use>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="178"
              viewBox="0 0 3 178"
              fill="none"
              style={{ marginRight: "64px" }}
            >
              <path
                d="M1.5 1.62952L1.50001 175.63"
                stroke="url(#paint0_linear_210_4078)"
                strokeOpacity="0.4"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_210_4078"
                  x1="1.99987"
                  y1="1.62952"
                  x2="2"
                  y2="175.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#2C2B2E" stopOpacity="0" />
                  <stop offset="0.5" stopColor="#2C2B2E" />
                  <stop offset="1" stopColor="#2C2B2E" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <svg width={63} height={63}>
              <use href={sprite + "#icon-sms"}></use>
            </svg>
          </IconMobileWrapperLast>
        </IconsMobileWrapper>
        <LeftBox>
          <LeftBoxText>
            {t("trafficBoxOne")}
            <LeftBoxAccent>{t("trafficBoxAccent")}</LeftBoxAccent>
            {t("trafficBoxTwo")}
          </LeftBoxText>
          <svg width={28} height={28}>
            <use href={sprite + "#icon-star"}></use>
          </svg>
        </LeftBox>
      </Container>
    </Section>
  );
};
