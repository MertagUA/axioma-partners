import styled from "@emotion/styled";
import { theme } from "../../utils/theme";
import background1 from "../../assets/images/item1.png";
import background2 from "../../assets/images/item2.png";
import background3 from "../../assets/images/item3.png";
import background4 from "../../assets/images/item4.png";
import background5 from "../../assets/images/item5.png";

export const Section = styled.section`
  padding: 79px 0 100px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.p`
  color: ${theme.white};
  font-family: "Axiforma";
  font-size: 72px;
  font-style: normal;
  font-weight: 700;
  line-height: 111.111%;
`;

export const AccentTitle = styled.span`
  background: linear-gradient(149deg, #0495ff 0%, #18c8ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Description = styled.p`
  max-width: 927px;
  width: 100%;
  margin-left: auto;
  margin-bottom: 32px;

  color: ${theme.white};
  text-align: right;
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const AccentDescription = styled.span`
  font-weight: 700;
`;

export const Item1 = styled.div`
  position: relative;
  max-width: 583px;
  width: 100%;
  height: 308px;
  padding: 40px;
  cursor: pointer;
  border-radius: 18px;
  background-color: ${theme.weCanItem};
  background-image: url(${background1});
  background-size: 50% 75%;
  background-repeat: no-repeat;
  background-position: right bottom;
  &:hover {
    .img1 {
      opacity: 1;
      transition: opacity 0.3s;
      transition-timing-function: easy-out;
    }
  }
`;

export const Item1Replace = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 583px;
  width: 100%;
  height: 308px;
  cursor: pointer;
  border-radius: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  transition-timing-function: easy-out;
  border: 2px solid ${theme.white};
`;

export const Item2 = styled.div`
  position: relative;
  max-width: 583px;
  width: 100%;
  height: 308px;
  padding: 40px;
  cursor: pointer;
  border-radius: 18px;
  background-color: ${theme.weCanItem};
  background-image: url(${background2});
  background-size: 57%;
  background-repeat: no-repeat;
  background-position: right bottom;
  &:hover {
    .img2 {
      opacity: 1;
      transition: opacity 0.3s;
      transition-timing-function: easy-out;
    }
  }
`;

export const Item2Replace = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 583px;
  width: 100%;
  height: 308px;
  cursor: pointer;
  border-radius: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  transition-timing-function: easy-out;
  border: 2px solid ${theme.white};
`;

export const Item3 = styled.div`
  position: relative;
  max-width: 348px;
  width: 100%;
  height: 547px;
  padding: 40px;
  cursor: pointer;
  border-radius: 18px;
  background-color: ${theme.weCanItem};
  background-image: url(${background3});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: right bottom;
  &:hover {
    .img3 {
      opacity: 1;
      transition: opacity 0.3s;
      transition-timing-function: easy-out;
    }
  }
`;

export const Item3Replace = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 348px;
  width: 100%;
  height: 547px;
  cursor: pointer;
  border-radius: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  transition-timing-function: easy-out;
  border: 2px solid ${theme.white};
`;

export const Item4 = styled.div`
  position: relative;
  max-width: 818px;
  width: 100%;
  height: 285px;
  padding: 40px;
  cursor: pointer;
  border-radius: 18px;
  background-color: ${theme.weCanItem};
  background-image: url(${background4});
  background-repeat: no-repeat;
  background-size: 57%;
  background-position: right bottom;
  &:hover {
    .img4 {
      opacity: 1;
      transition: opacity 0.3s;
      transition-timing-function: easy-out;
    }
  }
`;

export const Item4Replace = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 818px;
  width: 100%;
  height: 285px;
  cursor: pointer;
  border-radius: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  transition-timing-function: easy-out;
  border: 2px solid ${theme.white};
`;

export const Item5 = styled.div`
  position: relative;
  max-width: 818px;
  width: 100%;
  height: 238px;
  padding: 40px 0 30px 40px;
  cursor: pointer;
  border-radius: 18px;
  background-color: ${theme.weCanItem};
  background-image: url(${background5});
  background-repeat: no-repeat;
  background-size: 48%;
  background-position: right bottom;
  &:hover {
    .img5 {
      opacity: 1;
      transition: opacity 0.3s;
      transition-timing-function: easy-out;
    }
  }
`;

export const Item5Replace = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 818px;
  width: 100%;
  height: 238px;
  cursor: pointer;
  border-radius: 18px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  transition-timing-function: easy-out;
  border: 2px solid ${theme.white};
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: baseline;

  height: 44px;
  margin-bottom: 28px;
  gap: 22px;
`;

export const Name1 = styled.p`
  color: ${theme.blue};
  font-family: "Axiforma";
  font-size: 29px;
  font-style: normal;
  font-weight: 900;
  line-height: 190.871%;
`;

export const Name2 = styled.p`
  color: ${theme.pink};
  font-family: "Axiforma";
  font-size: 29px;
  font-style: normal;
  font-weight: 900;
  line-height: 190.871%;
`;

export const Name3 = styled.p`
  color: ${theme.green2};
  font-family: "Axiforma";
  font-size: 29px;
  font-style: normal;
  font-weight: 900;
  line-height: 190.871%;
`;

export const Name4 = styled.p`
  color: ${theme.purple};
  font-family: "Axiforma";
  font-size: 29px;
  font-style: normal;
  font-weight: 900;
  line-height: 190.871%;
`;

export const Text1 = styled.p`
  max-width: 248px;
  width: 100%;
  height: 128px;

  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const TopItemsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const BottomItemsWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const RightItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const Text2 = styled.p`
  max-width: 353px;
  width: 100%;
  height: 96px;

  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const Text3 = styled.p`
  max-width: 292px;
  width: 100%;
  height: 160px;

  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const Text4 = styled.p`
  max-width: 405px;
  width: 100%;
  height: 128px;

  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;

export const Text5 = styled.p`
  max-width: 421px;
  width: 100%;
  height: 96px;

  color: ${theme.grey};
  font-family: "Axiforma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 177.778%;
`;
