import { styled } from "styled-components";

export enum NavButtonType {
  Primary = "primary",
  Secondary = "secondary",
}
interface Props {
  text: string;
  type: NavButtonType;
}
const Button = styled.button<Props>`
  color: ${(props: Props) =>
    props.type == NavButtonType.Primary
      ? "#000"
      : props.type == NavButtonType.Secondary
      ? "#f5f5f5"
      : ""};
  background-color: ${(props: Props) =>
    props.type == NavButtonType.Primary
      ? "#f5f5f5"
      : props.type == NavButtonType.Secondary
      ? "transparent"
      : ""};
  font-size: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 119px;
  height: 36px;
  border: ${(props: Props) =>
    props.type == NavButtonType.Primary
      ? "none"
      : props.type == NavButtonType.Secondary
      ? "1px solid #f5f5f5 "
      : "none"};
  border-radius: 20px;
  cursor: pointer;
`;

export default function NavButton(props: Props) {
  return (
    <>
      <Button {...props}>{props.text}</Button>
    </>
  );
}
