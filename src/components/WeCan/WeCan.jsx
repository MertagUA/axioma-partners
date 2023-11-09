import {
  AccentDescription,
  AccentTitle,
  BottomItemsWrapper,
  Description,
  DescriptionMobile,
  InfoItem,
  InfoText,
  InfoTitle,
  InfoWrapper,
  Item1,
  Item1Replace,
  Item1ReplaceMobile,
  Item2,
  Item2Replace,
  Item2ReplaceMobile,
  Item3,
  Item3Replace,
  Item3ReplaceMobile,
  Item4,
  Item4Replace,
  Item4ReplaceMobile,
  Item5,
  Item5Replace,
  Item5ReplaceMobile,
  ItemInfoReplaceMobidle,
  ItemsContainer,
  Name1,
  Name2,
  Name3,
  Name4,
  NameContainer,
  RightItemsWrapper,
  Section,
  Text1,
  Text2,
  Text3,
  Text4,
  Text5,
  TextWrapper,
  Title,
  TopItemsWrapper,
} from "./WeCan.styled";
import sprite from "../../assets/images/sprite.svg";
import replace1 from "../../assets/images/item1Replace.png";
import replace2 from "../../assets/images/item2Replace.png";
import replace3 from "../../assets/images/item3Replace.png";
import replace4 from "../../assets/images/item4Replace.png";
import replace5 from "../../assets/images/item5Replace.png";
import mobileReplace1 from "../../assets/images/item1ReplaceMobile.png";
import mobileReplace2 from "../../assets/images/item2ReplaceMobile.png";
import mobileReplace3 from "../../assets/images/item3ReplaceMobile.png";
import mobileReplace4 from "../../assets/images/item4ReplaceMobile.png";
import mobileReplace5 from "../../assets/images/item5ReplaceMobile.png";
import mobileReplaceInfo from "../../assets/images/itemClick.png";

export const WeCan = () => {
  return (
    <Section name="we-can">
      <Title className="text text--enter" data-scroll="out" data-splitting="">
        ЩО МИ <AccentTitle>МОЖЕМО ?</AccentTitle>
      </Title>
      <Description>
        Наша команда майстерно впроваджу
        <span className="ukrainianWordMedium">є</span> вс
        <span className="ukrainianWordMedium">i</span> необхідн
        <span className="ukrainianWordMedium">i</span>{" "}
        <span className="ukrainianWordMedium">i</span>нструменти та стратег
        <span className="ukrainianWordMedium">iї</span>, включаючи воронки
        продаж<span className="ukrainianWordMedium">i</span>в, створення креатив
        <span className="ukrainianWordMedium">i</span>в, ленд
        <span className="ukrainianWordMedium">i</span>нг
        <span className="ukrainianWordMedium">i</span>в{" "}
        <span className="ukrainianWordMedium">i</span> ефективну електронну
        пошту, для досягнення ваших{" "}
        <AccentDescription>
          рекламних ц<span className="ukrainianWordBold">i</span>лей
        </AccentDescription>{" "}
        та{" "}
        <AccentDescription>
          зб<span className="ukrainianWordBold">i</span>льшення прибутку
        </AccentDescription>
      </Description>
      <DescriptionMobile>
        Наша команда майстерно впроваджу
        <span className="ukrainianWordMedium">є</span> вс
        <span className="ukrainianWordMedium">i</span> необхідн
        <span className="ukrainianWordMedium">i</span>{" "}
        <span className="ukrainianWordMedium">i</span>нструменти та стратег
        <span className="ukrainianWordMedium">ії</span>, для досягнення ваших{" "}
        <AccentDescription>
          рекламних ц<span className="ukrainianWordBold">i</span>лей
        </AccentDescription>{" "}
        та{" "}
        <AccentDescription>
          зб<span className="ukrainianWordBold">i</span>льшення прибутку
        </AccentDescription>
      </DescriptionMobile>
      <ItemsContainer>
        <TopItemsWrapper>
          <InfoItem>
            <ItemInfoReplaceMobidle
              src={mobileReplaceInfo}
              alt="information"
              className="imgInfo"
              loading="lazy"
            />
            <InfoWrapper>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="94"
                height="95"
                viewBox="0 0 94 95"
                fill="none"
              >
                <path
                  d="M65.8766 91.0396H43.5791C43.2368 90.6458 42.8286 90.2921 42.5635 89.8521C41.7008 88.4229 40.9867 86.8961 40.0422 85.5268C37.5346 81.893 34.4999 78.703 31.4272 75.5493C31.1493 75.2638 30.8713 74.8783 30.8032 74.5011C29.4884 67.2441 28.1835 59.9855 26.9278 52.7186C26.4726 50.083 28.2789 47.5603 30.8357 47.0786C33.566 46.5643 36.0009 48.1752 36.6386 50.9176C36.7416 51.3592 36.8462 51.8007 36.9484 52.243C37.5285 54.7446 38.1087 57.2461 38.6888 59.7477C38.7403 59.7417 38.7926 59.7364 38.8441 59.7303V58.7366C38.8441 48.3979 38.8441 38.0592 38.8441 27.7204C38.8441 27.4084 38.8335 27.0941 38.8577 26.7836C39.0599 24.2047 41.3093 22.5029 43.7987 23.0384C45.6164 23.43 46.8327 25.0341 46.8373 27.1251C46.8494 33.0613 46.8426 38.9975 46.8433 44.9337C46.8433 45.2049 46.8433 45.476 46.8433 45.9865C47.0312 45.635 47.1077 45.4957 47.1796 45.3541C48.0801 43.5811 49.8834 42.6669 51.6768 43.0752C53.6263 43.5197 54.8161 45.0488 54.8388 47.1535C54.8486 48.051 54.8403 48.9485 54.8403 50.0399C54.9994 49.7861 55.0645 49.7036 55.1077 49.6104C56.0657 47.5807 57.7758 46.6544 59.7647 47.0907C61.6422 47.5019 62.8267 49.1371 62.8373 51.3349C62.8411 52.1923 62.8373 53.0504 62.8373 53.9077C63.3568 52.8535 63.9877 51.9772 65.0223 51.4379C67.6253 50.08 70.7941 51.9128 70.8267 54.8923C70.885 60.1749 70.8434 65.4582 70.8381 70.7408C70.8381 71.0233 70.8085 71.3103 70.7517 71.5868C69.5498 77.4488 68.3282 83.307 67.149 89.1735C66.9793 90.0164 66.6279 90.642 65.8751 91.0404L65.8766 91.0396Z"
                  fill="#0495FF"
                />
                <path
                  d="M34.8749 40.6715C34.8749 40.2595 34.8749 39.9528 34.8749 39.646C34.8787 35.3306 34.8249 31.0144 34.8999 26.6997C34.99 21.5072 40.0734 17.8151 45.0622 19.2374C48.6172 20.2508 50.8446 23.284 50.8658 27.214C50.8885 31.3878 50.8711 35.5608 50.8711 39.7347C50.8711 40.024 50.8711 40.3133 50.8711 40.6768C56.3756 37.6034 60.245 30.6463 58.3773 23.0553C56.6112 15.8778 50.0289 10.8368 42.5432 10.9466C35.2627 11.0541 28.7993 16.3314 27.2536 23.4211C25.5131 31.4037 29.9013 37.9874 34.8741 40.6707L34.8749 40.6715Z"
                  fill="white"
                />
                <path
                  d="M34.8742 40.6707C29.9006 37.9874 25.5132 31.4037 27.2536 23.4211C28.7994 16.3314 35.2627 11.0541 42.5432 10.9466C50.029 10.8368 56.6104 15.877 58.3774 23.0553C60.2458 30.6456 56.3757 37.6034 50.8712 40.6768C50.8712 40.3133 50.8712 40.024 50.8712 39.7346C50.8712 35.5608 50.8886 31.3878 50.8659 27.2139C50.8447 23.284 48.6173 20.2508 45.0622 19.2374C40.0735 17.8151 34.99 21.5065 34.8999 26.6997C34.8249 31.0136 34.878 35.3306 34.8749 39.646C34.8749 39.9528 34.8749 40.2595 34.8749 40.6715L34.8742 40.6707Z"
                  fill="#0495FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M57.7972 43.5C62.2275 39.3908 65 33.5192 65 27C65 14.5736 54.9264 4.5 42.5 4.5C30.0736 4.5 20 14.5736 20 27C20 33.5192 22.7725 39.3908 27.2028 43.5H21.7623C18.1555 38.9729 16 33.2382 16 27C16 12.3645 27.8645 0.5 42.5 0.5C57.1355 0.5 69 12.3645 69 27C69 33.2382 66.8445 38.9729 63.2377 43.5H57.7972Z"
                  fill="#84CBFF"
                />
              </svg>
              <TextWrapper>
                <InfoTitle>Тисни</InfoTitle>
                <InfoText>На блоки щоб дивитись приклади</InfoText>
              </TextWrapper>
            </InfoWrapper>
          </InfoItem>
          <Item1>
            <Item1Replace
              src={replace1}
              alt="landings"
              className="img1"
              loading="lazy"
            />
            <Item1ReplaceMobile
              src={mobileReplace1}
              alt="landings"
              className="img1"
              loading="lazy"
            />
            <NameContainer>
              <svg width={44} height={44}>
                <use href={sprite + "#icon-square"}></use>
              </svg>
              <Name1>ЛЕНДІНГИ</Name1>
            </NameContainer>
            <Text1>
              Ми створю<span className="ukrainianWordMedium">є</span>мо стор
              <span className="ukrainianWordMedium">і</span>
              нки, що перетворюють в
              <span className="ukrainianWordMedium">і</span>дв
              <span className="ukrainianWordMedium">і</span>дувач
              <span className="ukrainianWordMedium">і</span>в у пост
              <span className="ukrainianWordMedium">і</span>йну аудитор
              <span className="ukrainianWordMedium">і</span>ю.
            </Text1>
          </Item1>
          <Item2>
            <Item2Replace
              src={replace2}
              alt="craters"
              className="img2"
              loading="lazy"
            />
            <Item2ReplaceMobile
              src={mobileReplace2}
              alt="craters"
              className="img2"
              loading="lazy"
            />
            <NameContainer>
              <svg width={44} height={44}>
                <use href={sprite + "#icon-triangle"}></use>
              </svg>
              <Name2>ВОРОНКИ</Name2>
            </NameContainer>
            <Text2>
              Що допомагають вам залучити нових гравц
              <span className="ukrainianWordMedium">і</span>в та п
              <span className="ukrainianWordMedium">і</span>двищити{" "}
              <span className="ukrainianWordMedium">ї</span>х конверс
              <span className="ukrainianWordMedium">і</span>ю
            </Text2>
          </Item2>
        </TopItemsWrapper>
        <BottomItemsWrapper>
          <Item3>
            <Item3Replace
              src={replace3}
              alt="mails"
              className="img3"
              loading="lazy"
            />
            <Item3ReplaceMobile
              src={mobileReplace3}
              alt="mails"
              className="img3"
              loading="lazy"
            />
            <NameContainer>
              <svg width={44} height={44}>
                <use href={sprite + "#icon-mail"}></use>
              </svg>
              <Name3>МАЙЛИ</Name3>
            </NameContainer>
            <Text3>
              Iнструмент для створення зв'язку з вашою аудитор
              <span className="ukrainianWordMedium">іє</span>ю, щоб надсилати
              персонал<span className="ukrainianWordMedium">і</span>зован
              <span className="ukrainianWordMedium">і </span>
              пов<span className="ukrainianWordMedium">і</span>домлення та
              пропозиц<span className="ukrainianWordMedium">ії</span>
            </Text3>
          </Item3>
          <RightItemsWrapper>
            <Item4>
              <Item4Replace
                src={replace4}
                alt="mailing"
                className="img4"
                loading="lazy"
              />
              <Item4ReplaceMobile
                src={mobileReplace4}
                alt="mailing"
                className="img4"
                loading="lazy"
              />
              <NameContainer>
                <svg width={44} height={44}>
                  <use href={sprite + "#icon-purpleStar"}></use>
                </svg>
                <Name4>РОЗСИЛАННЯ</Name4>
              </NameContainer>
              <Text4>
                Це не просто пов<span className="ukrainianWordMedium">і</span>
                домлення, а потужний{" "}
                <span className="ukrainianWordMedium">і</span>нструмент для
                ретеншину гравц<span className="ukrainianWordMedium">і</span>в
                та п<span className="ukrainianWordMedium">і</span>дтримки
                зв'язку з ними, щоб ви завжди були на{" "}
                <span className="ukrainianWordMedium">ї</span>х горизонт
                <span className="ukrainianWordMedium">і</span>
              </Text4>
            </Item4>
            <Item5>
              <Item5Replace
                src={replace5}
                alt="creatives"
                className="img5"
                loading="lazy"
              />
              <Item5ReplaceMobile
                src={mobileReplace5}
                alt="creatives"
                className="img5"
                loading="lazy"
              />
              <NameContainer>
                <svg width={44} height={44}>
                  <use href={sprite + "#icon-circle"}></use>
                </svg>
                <Name1>КРЕАТИВИ</Name1>
              </NameContainer>
              <Text5>
                Ми розробля<span className="ukrainianWordMedium">є</span>мо
                креативн<span className="ukrainianWordMedium">і</span> рекламн
                <span className="ukrainianWordMedium">і </span>
                матер<span className="ukrainianWordMedium">і</span>али, як
                <span className="ukrainianWordMedium">і </span>
                привертають увагу та вид
                <span className="ukrainianWordMedium">і</span>ляються серед
                конкурент<span className="ukrainianWordMedium">і</span>в
              </Text5>
            </Item5>
          </RightItemsWrapper>
        </BottomItemsWrapper>
      </ItemsContainer>
    </Section>
  );
};
