import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorStyle, fontSize, fontweight, paddingStyle } from "../../GlobalStyled";

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
`;

const MenuButton = ({ title }: any): JSX.Element => {
  return (
    <Container>
      <Link to={"#"}>{title}</Link>
    </Container>
  );
};

export default MenuButton;
