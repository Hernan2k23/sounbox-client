import React from "react";
import { styled } from "styled-components";
import CardButton, { CardButtonType } from "./CardButton";
import bg from "../assets/FirstBackground.png";
const Container = styled.section`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 85px; */
  background-image: url(${bg});
  background-size: cover;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  width: 574px;
  height: 396px;
  margin-top: 85px;
`;
const Title = styled.h1`
  font-size: 48px;
`;
const ButtonsContainer = styled.div`
  /* background-color: black; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const Description = styled.span`
  display: inline;
`;
//1-month free trial    $7.99/month after
const Price = styled.p`
  color: #2dceef;
  display: inline;
  margin-left: 10px;
`;
const FirstHero: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>
          Open the world of music.
          <br />
          It’s all here.
        </Title>
        <ButtonsContainer>
          <CardButton
            type={CardButtonType.Primary}
            text="MUSICBOX PREMIUM"
          ></CardButton>
          <CardButton
            type={CardButtonType.Secondary}
            text="MUSICBOX FREE"
          ></CardButton>
        </ButtonsContainer>
        <Description>
          1-month free trial
          <Price>$7.99</Price>/month after
        </Description>
      </Card>
    </Container>
  );
};

export default FirstHero;
