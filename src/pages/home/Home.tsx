import styled from "styled-components";
import Banner from "../components/Banner";
import Contents from "../components/Contents";
import CategoryContents from "../components/CategoryContents";
import TopContents from "./components/TopContents";
import { mainList } from "../../list/categoryList";
import MainThemeContents from "./components/MainThemeContents";
import { testBannerArr, testThemeContentsArr } from "../../API";

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
      <Banner list={testBannerArr}/>
      <Contents title="카테고리">
        <CategoryContents list={mainList} />
      </Contents>
      <Contents title="이번 주 인기작 TOP 20">
        <TopContents />
      </Contents>

      {mainList.map((data, index)=>(
        <MainThemeContents key={index} list={testThemeContentsArr} title={data}/>
      ))}
    </Container>
  );
};

export default Home;
