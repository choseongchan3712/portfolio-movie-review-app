import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import BannerContents from "./banner_components/BannerContents";
import { colorStyle, fontSize, fontweight } from "../../../GlobalStyled";

const Container = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 85vh;
  @media screen and (max-width: 1024px) {
    height: 400px;
  }
  @media screen and (max-width: 640px) {
    height: 250px;
  }
  @media screen and (max-width: 320px) {
    height: 400px;
  }

  .swiper {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
  }

  .swiper-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 90%;
    border-radius: 20px;
  }
  .swiper-slide-active {
    transform: scale(1.05); /* 활성 슬라이드 크기 증가 */
    transform-origin: center;
    transition: 0.5s ease-in-out;
  }
  .swiper-button-prev {
    position: absolute;
    z-index: 2;
    top: 670px;
    left: 100px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    backdrop-filter: blur(20px);
    &:after {
      font-size: 30px;
      color: ${colorStyle.pointColor};
      font-weight: ${fontweight.pcbold};
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .swiper-button-next {
    position: absolute;
    z-index: 2;
    top: 670px;
    left: 250px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    backdrop-filter: blur(20px);
    &:after {
      font-size: 30px;
      color: ${colorStyle.pointColor};
      font-weight: ${fontweight.pcbold};
    }
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .swiper-pagination {
    position: absolute;
    z-index: 2;
    width: auto;
    height: auto;
    top: 663px;
    left: 175px;
    color: ${colorStyle.pointColor};
    font-size: ${fontSize.pcTitle};
    font-weight: ${fontweight.pcbold};
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
`;

const Banner = (): JSX.Element => {
  return (
    <Container>
      <>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          spaceBetween={60}
          slidesPerView={1.1}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 60,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 25,
            },
            320: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            0: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            }
          }}
        >
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
          <SwiperSlide>
            <BannerContents />
          </SwiperSlide>
        </Swiper>
      </>
    </Container>
  );
};

export default Banner;
