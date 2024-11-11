import styled from "styled-components";
import TopBox from "./top_components/TopBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  height: 10vw;
  .mySwiper {
    height: 100%;
  }
  .swiper-slide {
    width: calc(100% / 10.5);
  }
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 35px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    &:after {
      font-size: 17px;
      font-weight: 900;
      color: black;
    }
  }

  .swiper-button-next {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 35px;
    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    &:after {
      font-size: 17px;
      font-weight: 900;
      color: black;
    }
  }

  .swiper-button-disabled {
    display: none;
  }
`;

const testNum: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const TopContents = (): JSX.Element => {
  return (
    <Container>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerGroup={9}
        allowTouchMove={false}
        slidesPerView="auto"
        spaceBetween={20}
      >
        {testNum.map((data: number, index: number) => (
          <SwiperSlide key={index}>
            <TopBox num={data} link="/detail/test" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default TopContents;
