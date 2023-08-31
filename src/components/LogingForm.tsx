import { styled } from "styled-components";

const Container = styled.div`
  width: 600px;
  height: 740px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SocialButton = styled.button`
  width: 180px;
  height: 36px;
`;
const Title = styled.h1`
  color: #000;
`;
function LoginForm() {
  return (
    <Container>
      <Title>Ready to sign up?</Title>
      <SocialButton>Facebook</SocialButton>
      <SocialButton>Google</SocialButton>
    </Container>
  );
}

export default LoginForm;
