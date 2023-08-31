import React from "react";
import { styled } from "styled-components";
import FullLogo from "../assets/FullLogo.png";
import InstagramIcon from "../assets/Instagram.png";
import TwitterIcon from "../assets/Twitter.png";
import FacebookIcon from "../assets/Facebook.png";
const Hero = styled.section`
  width: 100%;
  height: 30vh;
  background-color: #111313;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 85px; */
  /* border-top: 1px dashed white; */
`;
const MainContainer = styled.div`
  display: flex;
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
`;
const LinksContainer = styled.div`
  display: flex;
  width: 552px;
  height: 173px;
  margin-left: 30px;
  /* background-color: white; */
  /* border: 1px dotted white; */
`;
const MusicboxLinks = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-evenly;
  /* width: 50px; */
  height: 100%;
  /* background-color: blue; */
`;
const UsefulLinks = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  /* width: 50px; */
  height: 100%;
  /* background-color: red; */
`;
const CommunitiesLinks = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  /* width: 50px; */
  height: 100%;
  /* background-color: pink; */
`;
const Title = styled.h1`
  font-size: 14px;
  color: #848484;
`;
const Link = styled.a`
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;
const LegalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 173px;
  /* background-color: white; */
  /* border: 1px dotted white; */
`;
const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 184px;
  height: 173px;
  margin-left: 30px;
  /* background-color: white; */
  /* border: 1px dotted white; */
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 133px;
  height: 60px;
`;
const LegalLinksContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: space-evenly;
  /* border: 1 px dotted red; */
`;
const IconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LegalLink = styled(Link)`
  color: #848484;
  font-size: 12px;
  font-weight: normal;
`;
const SocialIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const SettingsContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  /* background-color: rebeccapurple; */
`;
const Language = styled.select`
  width: 70px;
  height: 17px;
  color: #ffffff;
  font-size: 14px;
  background-color: transparent;
  border: none;
`;
const Option = styled.option`
  color: #ffffff;
  font-size: 14px;
`;
const About = styled.span`
  font-size: 12px;
`;
const Footer: React.FC = () => {
  return (
    <Hero>
      <MainContainer>
        <LegalsContainer>
          <Logo src={FullLogo} />
          <LegalLinksContainer>
            <LegalLink>Legal</LegalLink>
            <LegalLink>Privacy</LegalLink>
            <LegalLink>Cookies</LegalLink>
            <LegalLink>Ads</LegalLink>
          </LegalLinksContainer>
        </LegalsContainer>

        <LinksContainer>
          <MusicboxLinks>
            <Title>MUSICBOX</Title>
            <Link>About</Link>
            <Link>Premium</Link>

            <Link>Features</Link>
          </MusicboxLinks>
          <CommunitiesLinks>
            <Title>COMMUNITIES</Title>
            <Link>For Artists</Link>

            <Link>Developers</Link>

            <Link>Press</Link>
          </CommunitiesLinks>
          <UsefulLinks>
            <Title>USEFUL LINKS</Title>
            <Link>Help</Link>

            <Link>Web Player</Link>

            <Link>Explore Channels</Link>

            <Link>Download App</Link>
          </UsefulLinks>
        </LinksContainer>

        <SocialsContainer>
          <IconsContainer>
            <SocialIcon src={FacebookIcon} />
            <SocialIcon src={TwitterIcon} />
            <SocialIcon src={InstagramIcon} />
          </IconsContainer>

          <SettingsContainer>
            <Language>
              <Option>English (us)</Option>
            </Language>
            <About>© Soundbox 2023</About>
          </SettingsContainer>
        </SocialsContainer>
      </MainContainer>
    </Hero>
  );
};

export default Footer;
