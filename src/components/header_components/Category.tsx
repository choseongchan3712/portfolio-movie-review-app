import styled from "styled-components";
import CategoryButton from "./CategoryButton";

const Container = styled.div`
position: relative;
z-index: 991;
`;

const Category = ():JSX.Element => {
  return <Container>
    <CategoryButton />
  </Container>;
};

export default Category;