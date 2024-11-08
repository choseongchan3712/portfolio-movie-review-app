import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorStyle } from "../../GlobalStyled";

const Container = styled.div`
  padding-right: 50px;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
    color: ${colorStyle.pointColor};
  }
  @media screen and (max-width: 1024px) {
    padding-right: 20px;
    a {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 640px) {
    padding-right: 15px;
  }
`;

const Logo = (): JSX.Element => {
  return (
    <Container>
      <Link to={"/"}>CHOREVIEW</Link>
    </Container>
  );
};

export default Logo;
