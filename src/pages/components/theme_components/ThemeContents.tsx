import { ReactNode } from "react";
import Contents from "../Contents";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

interface ThemeProps {
  themeTile: string;
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  overflow: hidden;
  height: 9vw;
  .mySwiper {
  height: 100%;
}
.swiper-slide {
  width: calc(100% / 6.5);
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
    backdrop-filter:blur(8px);
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
    backdrop-filter:blur(8px);
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

const ThemeContents = ({ themeTile, children }: ThemeProps): JSX.Element => {
  return (
    <Contents title={themeTile}>
      <Container className="themecontents">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          slidesPerGroup={6}
          allowTouchMove={false}
          slidesPerView="auto"
          spaceBetween={10}
        >
          {children}
        </Swiper>
      </Container>
    </Contents>
  );
};

export default ThemeContents;
