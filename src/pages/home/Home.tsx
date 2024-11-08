import styled from "styled-components";
import Banner from "./components/Banner";

const Container = styled.div`
position: relative;
z-index: 0;
top: 0;
left: 0;
width: 100%;
`;

const Home = (): JSX.Element => {
  return <Container>
    <Banner />
  </Container>;
};

export default Home;