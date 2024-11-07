import styled from "styled-components";
import { colorStyle, fontSize, fontweight, paddingStyle } from "../../GlobalStyled";

const Container = styled.div`
position: relative;
z-index: 991;
padding: ${paddingStyle.buttonPadding};
background-color: ${colorStyle.buttonBasicColor};
border-radius: 8px;
font-size: ${fontSize.pcLabel};
font-weight: ${fontweight.pcBasic};
&:hover {
  background-color: ${colorStyle.buttonHoverColor};
}
&::before {
  content: '';
  display: block;
  width: 100%;
  height: 10px;
  position: absolute;
  bottom: -10px;
  left: 0;
}
`;
const CategoryButton= ():JSX.Element => {
  return <Container>
    모든 카테고리
  </Container>;
};

export default CategoryButton