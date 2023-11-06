import {
  Description,
  Icon,
  Item,
  ItemDescription,
  ItemTitle,
  ItemWrapper,
  Section,
  TextWrapper,
  Title,
} from "./ForClients.styled";
import sprite from "../../assets/images/sprite.svg";

export const ForClients = () => {
  return (
    <Section name="for-clients">
      <TextWrapper>
        <Description>
          Ми прагнемо надавати нашим клієнтам найкращі умови співпраці, а наща
          підтримка завжди готова надати необхідну допомогу
        </Description>
        <Title>ДЛЯ НАШИХ КЛIЄНТIВ</Title>
      </TextWrapper>
      <ItemWrapper>
        <Item>
          <Icon>
            <use href={sprite + "#icon-coin"}></use>
          </Icon>
          <ItemTitle>Організація виплат</ItemTitle>
          <ItemDescription>
            Ми гарантуємо ефективну організацію виплат та забезпечуєм швидкий та
            надійний доступ до свого прибутку
          </ItemDescription>
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-clientStar"}></use>
          </Icon>
          <ItemTitle>Кращий CPA rate</ItemTitle>
          <ItemDescription>
            Наші CPA ставки одні з найвищих на ринку, що дозволяє нашим
            партнерам максимізувати свій дохід
          </ItemDescription>
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-emodji"}></use>
          </Icon>
          <ItemTitle>Індивідуальні умови</ItemTitle>
          <ItemDescription>
            Ми пропонуємо індивідуальні умови співпраці для кожного клієнта,
            враховуючи їхні унікальні потреби та цілі
          </ItemDescription>
        </Item>
        <Item>
          <Icon>
            <use href={sprite + "#icon-support"}></use>
          </Icon>
          <ItemTitle>Підтримка 24 на 7</ItemTitle>
          <ItemDescription>
            Наша команда готова надати 24/7 підтримку, гарантуючи, що усі ваші
            запити та питання обслуговуються вчасно та професійно
          </ItemDescription>
        </Item>
      </ItemWrapper>
    </Section>
  );
};
