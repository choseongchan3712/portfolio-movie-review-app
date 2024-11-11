import styled from "styled-components";
import Banner from "../components/Banner";
import { testBannerArr, testThemeContentsArr } from "../../API";
import Contents from "../components/Contents";
import CategoryContents from "../components/CategoryContents";
import { movieList } from "../../list/categoryList";
import MovieThemeContents from "./components/MovieThemeContents";

const Container = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
`;

const MoviePages = (): JSX.Element => {
  return (
    <Container>
      <Banner list={testBannerArr} />
      <Contents title="카테고리">
        <CategoryContents list={movieList} />
      </Contents>

      {movieList.map((data, index) => (
        <MovieThemeContents
          key={index}
          list={testThemeContentsArr}
          title={data}
        />
      ))}
    </Container>
  );
};

export default MoviePages;
