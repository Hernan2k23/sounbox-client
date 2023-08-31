import React from "react";
import { styled } from "styled-components";
import phoneImage from "../assets/Phone2.png";
const Container = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #161a1a;
  /* background-color: transparent; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 85px; */
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  width: 1440px;
  height: 716px;
  /* margin-top: 85px; */
`;
const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  gap: 10px;
  /* background-color: blue; */
`;
const Title = styled.h1`
  font-size: 48px;
  display: inline;
`;

const DescriptionContainer = styled.div`
  /* background-color: black; */
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;
const ImageContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  /* background-color: rebeccapurple; */
  background-image: url(${phoneImage});
  background-size: cover;
`;
const Description = styled.span`
  font-size: 20px;
`;
const Colored = styled.p`
  color: #2dceef;
  display: inline;
  margin: 0px 10px 0px 10px;
`;

//1-month free trial    $7.99/month after

const FourthHero: React.FC = () => {
  return (
    <Container>
      <Card>
        <DescriptionContainer>
          <TitleContainer>
            <Title>Find the music you want</Title>
          </TitleContainer>
          <Description>
            Search for your favorite songs using the description,
            <br />
            or turn on the<Colored>MusicFinder</Colored>feature to find the song
            <br />
            that is playing near you.
          </Description>
        </DescriptionContainer>
        <ImageContainer></ImageContainer>
      </Card>
    </Container>
  );
};

export default FourthHero;
