import styled from "styled-components";
import CategoryButton from "./CategoryButton";
import CategoryList from "./CategoryList";

const Container = styled.div`
  position: relative;
  z-index: 991;
  &:hover div:nth-child(2) {
    transform: scale(1);
  }
`;

const Category = (): JSX.Element => {
  return (
    <Container>
      <CategoryButton />
      <CategoryList />
    </Container>
  );
};

export default Category;
