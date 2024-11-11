import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const BannerContents = (): JSX.Element => {
  return (
    <Container>
      <Link to={"/detail/test"}></Link>
    </Container>
  );
};

export default BannerContents;
