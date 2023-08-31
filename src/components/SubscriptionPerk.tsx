import { styled } from "styled-components";

interface Props {
  src: string;
  title: string;
  description: string;
}
const PerkContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 200px;
  justify-content: center;
  align-items: center;
  /* border: 1px dotted blue; */
`;
const PerkIcon = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;
const PerkTitle = styled.h1`
  font-size: 20px;
  margin: 0;
`;
const PerkDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;
const SubscriptionPerk = (props: Props) => {
  return (
    <PerkContainer>
      <PerkIcon src={props.src} />
      <PerkTitle>{props.title}</PerkTitle>
      <PerkDescription>{props.description}</PerkDescription>
    </PerkContainer>
  );
};

export default SubscriptionPerk;
