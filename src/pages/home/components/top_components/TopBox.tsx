import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorStyle, fontSize, fontweight } from "../../../../GlobalStyled";

const Container = styled.div`
position: relative;
z-index: 2;
height: 100%;
width: 100%;
a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  text-decoration: none;
}
`;

const Num = styled.div`
position: absolute;
bottom: 0;
left: 0;
color: ${colorStyle.mainColor};
font-size: ${fontSize.pcLarge};
font-weight: ${fontweight.pcbold};
z-index: 4;
`;

const Contents = styled.div`
position: absolute;
z-index: 3;
right: 0;
top: 0;
width: 82%;
height: 100%;
border-radius: 10px;
background-color: gray;
`;

interface NumProps {
  num: number;
  link:string;
}

const TopBox = ({num, link}: NumProps):JSX.Element => {
  return <Container>
    <Link to={link}>
    <Num>{num}</Num>
    <Contents></Contents>
    </Link>
  </Container>;
};

export default TopBox;