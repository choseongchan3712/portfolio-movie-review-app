import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colorStyle,
  fontSize,
  fontweight,
  paddingStyle,
} from "../../GlobalStyled";

const Container = styled.div`
  margin-right: 10px;
  padding: ${paddingStyle.subButtonPadding};
  border-radius: 5px;
  &:hover {
    background-color: ${colorStyle.subButtonColor};
  }
  a {
    text-decoration: none;
    color: ${colorStyle.subFontColor};
    font-size: ${fontSize.pcTitle};
    font-weight: ${fontweight.pcBasic};
  }
  @media screen and (max-width: 1024px) {
    a {
      font-size: ${fontSize.tablet1Title};
    }
  }
  @media screen and (max-width: 640px) {
    a {
      font-size: ${fontSize.tablet2Title};
    }
  }
  @media screen and (max-width: 320px) {
    a {
      font-size: ${fontSize.mobileTitle};
    }
  }
`;

interface titleProps {
  title: string;
}

const MenuButton = ({ title }: titleProps): JSX.Element => {
  return (
    <Container>
      <Link to={`/${title}`}>{title}</Link>
    </Container>
  );
};

export default MenuButton;
