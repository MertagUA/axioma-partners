import {
  AccentDescription,
  AccentTitle,
  BottomItemsWrapper,
  Description,
  Item1,
  Item1Replace,
  Item2,
  Item2Replace,
  Item3,
  Item3Replace,
  Item4,
  Item4Replace,
  Item5,
  Item5Replace,
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
  Title,
  TopItemsWrapper,
} from "./WeCan.styled";
import sprite from "../../assets/images/sprite.svg";
import replace1 from "../../assets/images/item1Replace.png";
import replace2 from "../../assets/images/item2Replace.png";
import replace3 from "../../assets/images/item3Replace.png";
import replace4 from "../../assets/images/item4Replace.png";
import replace5 from "../../assets/images/item5Replace.png";

export const WeCan = () => {
  return (
    <Section name="we-can">
      <Title>
        ЩО МИ <AccentTitle>МОЖЕМО ?</AccentTitle>
      </Title>
      <Description>
        Наша команда майстерно впроваджує всі необхідні інструменти та
        стратегії, включаючи воронки продажів, створення креативів, лендінгів і
        ефективну електронну пошту, для досягнення ваших{" "}
        <AccentDescription>рекламних цілей</AccentDescription> та{" "}
        <AccentDescription>збільшення прибутку</AccentDescription>
      </Description>
      <ItemsContainer>
        <TopItemsWrapper>
          <Item1>
            <Item1Replace src={replace1} alt="landings" className="img1" />
            <NameContainer>
              <svg width={44} height={44}>
                <use href={sprite + "#icon-square"}></use>
              </svg>
              <Name1>ЛЕНДIНГИ</Name1>
            </NameContainer>
            <Text1>
              Ми створюємо сторінки, що перетворюють відвідувачів у постійну
              аудиторію.
            </Text1>
          </Item1>
          <Item2>
            <Item2Replace src={replace2} alt="craters" className="img2" />
            <NameContainer>
              <svg width={44} height={44}>
                <use href={sprite + "#icon-triangle"}></use>
              </svg>
              <Name2>ВОРОНКИ</Name2>
            </NameContainer>
            <Text2>
              Що допомагають вам залучити нових гравців та підвищити їх
              конверсію
            </Text2>
          </Item2>
        </TopItemsWrapper>
        <BottomItemsWrapper>
          <Item3>
            <Item3Replace src={replace3} alt="mails" className="img3" />
            <NameContainer>
              <svg width={44} height={44}>
                <use href={sprite + "#icon-mail"}></use>
              </svg>
              <Name3>МАЙЛИ</Name3>
            </NameContainer>
            <Text3>
              Iнструмент для створення зв'язку з вашою аудиторією, щоб надсилати
              персоналізовані повідомлення та пропозиції
            </Text3>
          </Item3>
          <RightItemsWrapper>
            <Item4>
              <Item4Replace src={replace4} alt="mailing" className="img4" />
              <NameContainer>
                <svg width={44} height={44}>
                  <use href={sprite + "#icon-purpleStar"}></use>
                </svg>
                <Name4>РОЗСИЛАННЯ</Name4>
              </NameContainer>
              <Text4>
                Це не просто повідомлення, а потужний інструмент для ретеншину
                гравців та підтримки зв'язку з ними, щоб ви завжди були на їх
                горизонті
              </Text4>
            </Item4>
            <Item5>
              <Item5Replace src={replace5} alt="creatives" className="img5" />
              <NameContainer>
                <svg width={44} height={44}>
                  <use href={sprite + "#icon-circle"}></use>
                </svg>
                <Name1>КРЕАТИВИ</Name1>
              </NameContainer>
              <Text5>
                Ми розробляємо креативні рекламні матеріали, які привертають
                увагу та виділяються серед конкурентів
              </Text5>
            </Item5>
          </RightItemsWrapper>
        </BottomItemsWrapper>
      </ItemsContainer>
    </Section>
  );
};
