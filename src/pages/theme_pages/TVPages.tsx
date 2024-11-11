import styled from "styled-components";
import Banner from "../components/Banner";
import { testBannerArr, testThemeContentsArr } from "../../API";
import Contents from "../components/Contents";
import CategoryContents from "../components/CategoryContents";
import { tvList } from "../../list/categoryList";
import TVThemeContents from "./components/TVThemeContents";

const Container = styled.div`
  position: relative;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
`;

const TVPages = (): JSX.Element => {
  return (
    <Container>
      <Banner list={testBannerArr} />
      <Contents title="카테고리">
        <CategoryContents list={tvList} />
      </Contents>

      {tvList.map((data, index) => (
        <TVThemeContents
          key={index}
          list={testThemeContentsArr}
          title={data}
        />
      ))}
    </Container>
  );
};

export default TVPages;
