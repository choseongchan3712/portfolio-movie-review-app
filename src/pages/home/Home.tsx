import styled from "styled-components";
import Banner from "./components/Banner";
import Contents from "./components/Contents";
import CategoryContents from "./components/CategoryContents";

const Container = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
`;

const Home = (): JSX.Element => {
  return (
    <Container>
      <Banner />
      <Contents title="카테고리">
        <CategoryContents />
      </Contents>
    </Container>
  );
};

export default Home;
