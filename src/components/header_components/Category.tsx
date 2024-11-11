import styled from "styled-components";
import CategoryButton from "./CategoryButton";
import CategoryList from "./CategoryList";
import { kidsList, mainList, movieList, tvList } from "../../list/categoryList";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  position: relative;
  z-index: 991;
  margin-right: 35px;
  &:hover div:nth-child(2) {
    transform: scale(1);
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Category = (): JSX.Element => {
  const location = useLocation();

  interface ThemeList {
    list: string[];
  }

  const themeList = ():ThemeList => {
    if (location.pathname === "/") {
      const list:string[] = mainList;
      return {list};
    } else if (location.pathname === "/TV") {
      const list:string[] = tvList;
      return {list};
    } else if (location.pathname === "/%EC%98%81%ED%99%94") {
      const list:string[] = movieList;
      return {list};
    } else if (location.pathname === "/%ED%82%A4%EC%A6%88") {
      const list:string[] = kidsList;
      return {list};
    }
    return {list: []};
  };

  return (
    <Container>
      <CategoryButton />
      <CategoryList list={themeList().list}/>
    </Container>
  );
};

export default Category;
