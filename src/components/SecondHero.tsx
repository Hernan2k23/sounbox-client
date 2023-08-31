import React from "react";
import { styled } from "styled-components";
import phoneImage from "../assets/Phone.png";
import flowIcon from "../assets/FLOW.svg";
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
  width: 1396px;
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
const IconContainer = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  /* background-color: rebeccapurple; */
  background-image: url(${flowIcon});
  background-size: cover;
`;
//1-month free trial    $7.99/month after

const SecondHero: React.FC = () => {
  return (
    <Container>
      <Card>
        <ImageContainer></ImageContainer>
        <DescriptionContainer>
          <TitleContainer>
            <IconContainer></IconContainer>
            <Title>FLOW</Title>
          </TitleContainer>
          <Description>
            Listen to a personalized mix of tracks based on your
            <br />
            listening history, or create your own mix of genres, artists
            <br />
            and playlists - letting you enjoy more of the music you love.
          </Description>
        </DescriptionContainer>
      </Card>
    </Container>
  );
};

export default SecondHero;
