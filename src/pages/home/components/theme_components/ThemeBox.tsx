import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
position: relative;
z-index: 3;
height: 100%;
width: 100%;
border-radius: 10px;
background-color: gray;
a {
  display: block;
  width: 100%;
  height: 100%;
}
`;

interface LinkProps {
  link: string;
}

const ThemeBox = ({link}:LinkProps):JSX.Element => {
  return <Container>
    <Link to={link}></Link>
  </Container>;
};

export default ThemeBox;