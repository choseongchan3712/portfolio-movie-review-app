import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  colorStyle,
  fontSize,
  fontweight,
  paddingStyle,
} from "../../GlobalStyled";
import { useRef } from "react";

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

  &.button_active {
    background-color: ${colorStyle.subButtonColor};
  }

  a.link_active {
    border-bottom: 2px solid #fff;
  }
`;

interface titleProps {
  title: string;
}

const MenuButton = ({ title }: titleProps): JSX.Element => {
  const location = useLocation();
  const buttonRef = useRef<HTMLDivElement>(null); //!
  const linkRef = useRef<HTMLAnchorElement>(null);
  console.log(location.pathname);

  if (location.pathname === "/TV") {
    if (buttonRef.current?.classList.contains("TV") && linkRef.current) { //!
      buttonRef.current.classList.add('button_active');
      linkRef.current.classList.add('link_active');
    } else if ((buttonRef.current?.classList.contains("영화") || buttonRef.current?.classList.contains("키즈")) && linkRef.current){
      buttonRef.current.classList.remove('button_active');
      linkRef.current.classList.remove('link_active');
    }
  } else if (location.pathname === "/%EC%98%81%ED%99%94") {
    if (buttonRef.current?.classList.contains("영화") && linkRef.current) { //!
      buttonRef.current.classList.add('button_active');
      linkRef.current.classList.add('link_active');
    } else if ((buttonRef.current?.classList.contains("TV") || buttonRef.current?.classList.contains("키즈")) && linkRef.current){
      buttonRef.current.classList.remove('button_active');
      linkRef.current.classList.remove('link_active');
    }
  } else if (location.pathname === "/%ED%82%A4%EC%A6%88") {
    if (buttonRef.current?.classList.contains("키즈") && linkRef.current) { //!
      buttonRef.current.classList.add('button_active');
      linkRef.current.classList.add('link_active');
    } else if ((buttonRef.current?.classList.contains("TV") || buttonRef.current?.classList.contains("영화")) && linkRef.current){
      buttonRef.current.classList.remove('button_active');
      linkRef.current.classList.remove('link_active');
    }
  } else if ((location.pathname !== "/TV" && location.pathname !== "/%EC%98%81%ED%99%94" && location.pathname !== "/%ED%82%A4%EC%A6%88") && (buttonRef.current && linkRef.current)){
    buttonRef.current.classList.remove('button_active');
    linkRef.current.classList.remove('link_active');
  }

  return (
    <Container ref={buttonRef} className={title}>
      <Link to={`/${title}`} ref={linkRef}>
        {title}
      </Link>
    </Container>
  );
};

export default MenuButton;
