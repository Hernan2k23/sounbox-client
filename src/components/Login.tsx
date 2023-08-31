import { styled } from "styled-components";
import LoginForm from "./LogingForm";
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
function Login() {
  return (
    <Container>
      <LoginForm></LoginForm>
    </Container>
  );
}

export default Login;
