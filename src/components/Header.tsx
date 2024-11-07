import styled from "styled-components";
import { paddingStyle } from "../GlobalStyled";
import Logo from "./header_components/Logo";
import Menu from "./header_components/Menu";
import Category from "./header_components/Category";

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${paddingStyle.pcPadding};
  z-index: 990;
  height: 70px;
`;

const LeftWrap = styled.div`
  display: flex;
  align-items: center;
`;

const RightWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Header = (): JSX.Element => {
  return (
    <Container>
      <LeftWrap>
        <Logo />
        <Menu />
      </LeftWrap>
      <RightWrap>
        <Category />
      </RightWrap>
    </Container>
  );
};

export default Header;
