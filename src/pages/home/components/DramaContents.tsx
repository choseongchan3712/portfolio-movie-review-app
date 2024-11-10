import { SwiperSlide } from "swiper/react";
import ThemeBox from "./theme_components/ThemeBox";
import ThemeContents from "./theme_components/ThemeContents";
import styled from "styled-components";

const Container = styled.div``;

const testArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DramaContents = (): JSX.Element => {
  return (
    <Container>
      <ThemeContents themeTile="드라마">
        {testArr.map((data, index) => (
          <SwiperSlide key={index}>
            <ThemeBox link="#" />
          </SwiperSlide>
        ))}
      </ThemeContents>
      ;
    </Container>
  );
};

export default DramaContents;
