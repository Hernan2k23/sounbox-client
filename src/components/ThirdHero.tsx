import React from "react";
import { styled } from "styled-components";
import listenImage from "../assets/Listen.png";

const Container = styled.section`
  width: 100%;
  height: 640px;
  background-color: #161a1a;
  display: flex;
  align-items: center;
  background-image: url(${listenImage});
  background-position: left center;
  background-repeat: no-repeat;
`;
const Card = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
  /* border: 1px solid white; */
  width: 500px;
  height: 200px;
  margin-left: 15%;
`;

const Title = styled.h1`
  font-size: 36px;
`;

const Description = styled.span`
  font-size: 20px;
`;

//1-month free trial    $7.99/month after

const ThirdHero: React.FC = () => {
  return (
    <Container>
      <Card>
        <Title>Listen anytime, anywhere</Title>
        <Description>
          All your favorite songs and episodes are always available
          <br /> even without WiFi or LTE.
        </Description>
      </Card>
    </Container>
  );
};

export default ThirdHero;
