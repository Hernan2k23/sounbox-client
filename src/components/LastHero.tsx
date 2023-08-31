import React from "react";
import { styled } from "styled-components";
import { CardButtonType } from "./CardButton";

import SubscriptionPerk from "./SubscriptionPerk";
import OfflineIcon from "../assets/Offline.svg";
import SkipIcon from "../assets/Skips.svg";
import HqIcon from "../assets/HQ.svg";
import NoAdsIcon from "../assets/NoADS.svg";
import SubscriptionCard from "./SubscriptionCard";
import { CardProps } from "./SubscriptionCard";
import whiteIcon from "../assets/WhiteCheck.png";
import blueIcon from "../assets/BlueCheck.png";
const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #161a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 85px; */
  /* border-top: 1px dashed white;
  overflow: hidden; */
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 36px;
`;

const PerksContainer = styled.div`
  display: flex;
  height: 150px;
  width: 872px;
  justify-content: space-evenly;
  /* background-color: red; */
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 872px;
  height: 100%;
  /* border: 1px white dashed; */
  justify-content: space-evenly;
  align-items: center;
`;
interface Perk {
  src: string;
  title: string;
  description: string;
}
const Options = styled.span`
  color: #afafaf;
  font-size: 20px;
`;
const CardsContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-evenly;
  align-items: center;
  /* border: 1px solid white; */
  width: 100%;
`;
const LastHero: React.FC = () => {
  const perks: Perk[] = [
    {
      src: OfflineIcon,
      title: "Offline mode.",
      description: "Save and listen anywhere.",
    },
    {
      src: HqIcon,
      title: "High quality audio.",
      description: "Enjoy the full range of sound.",
    },
    {
      src: NoAdsIcon,
      title: "No ads.",
      description: "Enjoy nonstop music.",
    },
    {
      src: SkipIcon,
      title: "Unlimited skips.",
      description: "Just tap skip.",
    },
  ];
  const cards: CardProps[] = [
    {
      title: "MusicBox Free",
      price: "0.00",
      buttonType: CardButtonType.Secondary,
      buttonText: "GET MUSICBOX FREE",
      benefits: [
        {
          iconSrc: whiteIcon,
          description: "Online listening",
        },
        {
          iconSrc: whiteIcon,
          description: "Regular audio",
        },
        {
          iconSrc: whiteIcon,
          description: "With advertising",
        },
        {
          iconSrc: whiteIcon,
          description: "30 skips per day",
        },
      ],
    },
    {
      title: "MusicBox Premiun",
      price: "7.99",
      extra: true,
      extraDescription: "Start with 1-month free trial*",
      premium: true,
      buttonType: CardButtonType.Primary,
      buttonText: "GET MUSICBOX PREMIUM",
      benefits: [
        {
          iconSrc: blueIcon,
          description: "Offline mode",
        },
        {
          iconSrc: blueIcon,
          description: "High quality audio",
        },
        {
          iconSrc: blueIcon,
          description: "No ads",
        },
        {
          iconSrc: blueIcon,
          description: "Unlimited skips",
        },
      ],
    },
  ];
  return (
    <Hero>
      <MainContainer>
        <Title>Why go Premium?</Title>
        <PerksContainer>
          {perks.map((perk: Perk) => (
            <SubscriptionPerk
              src={perk.src}
              title={perk.title}
              description={perk.description}
            />
          ))}
        </PerksContainer>
        <Options>Listen free or subscribe to MusicBox Premium.</Options>
        <CardsContainer>
          {cards.map((card: CardProps) => (
            <SubscriptionCard {...card}></SubscriptionCard>
          ))}
        </CardsContainer>
      </MainContainer>
    </Hero>
  );
};

export default LastHero;
