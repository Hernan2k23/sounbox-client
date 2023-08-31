import { styled } from "styled-components";
import CardButton, { CardButtonType } from "./CardButton";
interface Benefit {
  iconSrc: string;
  description: string;
}
export interface CardProps {
  title: string;
  price: string;
  premium?: boolean;
  extra?: boolean;
  extraDescription?: string;
  benefits: Benefit[];
  buttonType: CardButtonType;
  buttonText: string;
}
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 430px;
  width: 320px;
  /* justify-content: center; */
  /* align-items: center; */
  border: 2px solid white;
  border-radius: 10px;
  padding: 25px;
`;
const Title = styled.h1`
  font-size: 20px;
`;
const Amount = styled.p`
  font-size: 24px;
  font-weight: bold;
  display: inline;
`;
const ColoredAmount = styled(Amount)`
  color: #2dceef;
`;
const Price = styled.span`
  font-size: 10px;
  display: inline;
`;
const Extra = styled.span`
  font-size: 14px;
  color: #959494;
`;
const BenefitsContainer = styled.div`
  width: 100%;
  height: 200px;
  /* background-color: red; */
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BenefitIcon = styled.img`
  width: 21px;
  height: 12px;
  margin-right: 10px;
`;
const Benefit = styled.span`
  font-size: 16px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  height: 26%;
  width: 100%;
`;
const SubscriptionCard = (props: CardProps) => {
  return (
    <CardContainer>
      <HeaderContainer>
        <Title>{props.title}</Title>

        <Price>
          {props.premium ? (
            <ColoredAmount>{`$${props.price}`}</ColoredAmount>
          ) : (
            <Amount>{`$${props.price}`}</Amount>
          )}
          /Month
        </Price>
        {props.extra ? <Extra>{props.extraDescription}</Extra> : null}
      </HeaderContainer>

      <BenefitsContainer>
        {props.benefits.map((benefit: Benefit) => (
          <Benefit>
            <BenefitIcon src={benefit.iconSrc}></BenefitIcon>
            {benefit.description}
          </Benefit>
        ))}
      </BenefitsContainer>
      <ButtonContainer>
        <CardButton
          type={props.buttonType}
          text={props.buttonText}
        ></CardButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default SubscriptionCard;
