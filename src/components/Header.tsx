import styled from "styled-components";
import { paddingStyle } from "../GlobalStyled";
import Logo from "./header_components/Logo";
import Menu from "./header_components/Menu";
import Category from "./header_components/Category";
import SearchButton from "./header_components/SearchButton";
import ProfileIcon from "./header_components/ProfileIcon";
import Hamburger from "./header_components/Hamburger";

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
  @media screen and (max-width: 1024px){
    padding: 0 ${paddingStyle.tebletPadding};
    height: 50px;
  }
  @media screen and (max-width: 640px){
    padding: 0 ${paddingStyle.tebletPadding};
    height: 40px;
  }
  @media screen and (max-width: 370px){
    padding: 0 ${paddingStyle.tebletPadding};
    height: 65px;
  }
  @media screen and (max-width: 320px){
    padding: 0 ${paddingStyle.mobilePadding};
  }
`;

const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 370px){
    width: 100%;
    flex-direction: column;
    align-items: flex-start;

  }
`;

const RightWrap = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 370px){
    height: 100%;
    align-items: flex-start;
    padding-top: 10px;
  }
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
        <SearchButton />
        <ProfileIcon />
        <Hamburger />
      </RightWrap>
    </Container>
  );
};

export default Header;
