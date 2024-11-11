import styled from "styled-components";
import ThemeContents from "../../components/theme_components/ThemeContents";
import { SwiperSlide } from "swiper/react";
import ThemeBox from "../../components/theme_components/ThemeBox";

const Container = styled.div``;

interface ListProps {
  list: number[];
  title: string;
}

const KidsThemeContents = ({ list, title }: ListProps):JSX.Element => {
  return <Container>
  <ThemeContents themeTile={title}>
    {list.map((data, index) => (
      <SwiperSlide key={index}>
        <ThemeBox link="/detail/test" />
      </SwiperSlide>
    ))}
  </ThemeContents>
</Container>;
};

export default KidsThemeContents;