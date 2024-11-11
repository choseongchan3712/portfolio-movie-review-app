import { SwiperSlide } from "swiper/react";
import ThemeContents from "../../components/theme_components/ThemeContents";
import ThemeBox from "../../components/theme_components/ThemeBox";
import styled from "styled-components";

const Container = styled.div``;

interface ListProps {
  list: number[];
  title: string;
}

const TVThemeContents = ({ list, title }: ListProps): JSX.Element => {
  return (
    <Container>
      <ThemeContents themeTile={title}>
        {list.map((data, index) => (
          <SwiperSlide key={index}>
            <ThemeBox link="#" />
          </SwiperSlide>
        ))}
      </ThemeContents>
    </Container>
  );
};

export default TVThemeContents;
