import { styled } from "styled-components";

export enum CardButtonType {
  Primary = "primary",
  Secondary = "secondary",
}
interface Props {
  text: string;
  type: CardButtonType;
}
const Button = styled.button<Props>`
  color: ${(props: Props) =>
    props.type == CardButtonType.Primary
      ? "#f5f5f5"
      : props.type == CardButtonType.Secondary
      ? "#f5f5f5"
      : ""};
  background-color: ${(props: Props) =>
    props.type == CardButtonType.Primary
      ? "#f5f5f5"
      : props.type == CardButtonType.Secondary
      ? "transparent"
      : ""};
  background: ${(props: Props) =>
    props.type == CardButtonType.Primary ? "rgb(155, 45, 239)" : ""};
  background: ${(props: Props) =>
    props.type == CardButtonType.Primary
      ? "linear-gradient(90deg, rgba(155, 45, 239, 1) 0%,rgba(45, 155, 239, 1) 70%, rgba(53, 237, 251, 1) 100%)"
      : ""};

  font-size: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 36px;
  border: ${(props: Props) =>
    props.type == CardButtonType.Primary
      ? "none"
      : props.type == CardButtonType.Secondary
      ? "1px solid #f5f5f5 "
      : "none"};
  border-radius: 20px;
  cursor: pointer;
`;

export default function CardButton(props: Props) {
  return (
    <>
      <Button {...props}>{props.text}</Button>
    </>
  );
}
