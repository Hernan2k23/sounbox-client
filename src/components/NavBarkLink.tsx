import { styled } from "styled-components";

const Link = styled.a<Props>`
  font-size: 16px;
  color: #f5f5f5;
  width: 119px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
`;

interface Props {
  target?: string;
  href?: string;
  text: string;
}

export default function NavLink(props: Props) {
  return (
    <>
      <Link {...props}>{props.text}</Link>
    </>
  );
}
