import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorStyle, fontSize, fontweight, paddingStyle } from "../GlobalStyled";

const Container = styled.div`
  display: inline-block;
  padding: ${paddingStyle.buttonPadding};
  background-color: ${colorStyle.buttonBasicColor};
  border-radius: 8px;
  font-size: ${fontSize.pcLabel};
  font-weight: ${fontweight.pcBasic};
  white-space: nowrap;
  &:hover {
    background-color: ${colorStyle.buttonHoverColor};
  }
  a {
    text-decoration: none;
    color: ${colorStyle.mainColor};
    display: block;
  }
`;

interface LinkProps {
  link:string;
  text: string;
}

const Button = ({link, text}:LinkProps): JSX.Element => {
  return (
    <Container>
      <Link to={link}>{text}</Link>
    </Container>
  );
};

export default Button;
