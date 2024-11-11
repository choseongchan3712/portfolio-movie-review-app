import Button from "../../components/Button";
import "swiper/css";
import "swiper/css/navigation";
import styled from "styled-components";
// import { paddingStyle } from "../../../GlobalStyled";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Container = styled.div`
  /* position: relative;
  z-index: 3;
  width: 100%;
  overflow: hidden; */
  padding-right: 10px;

  .swiper-slide {
    width: auto;
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

// const Slide = styled.div`
//   position: relative;
//   z-index: 4;
//   width: 100%;
//   height: auto;
//   overflow: hidden;
// `;

// const SlideWrap = styled.div`
//   /* transform: translateX(calc(-100% + 100vw - ${paddingStyle.pcPadding} - 30px)); */
//   position: relative;
//   display: flex;
//   z-index: 4;
//   left: 0;
//   top: 0;
//   width: fit-content;
//   transition: 0.25s ease-in-out;
//   & > div {
//     margin-right: 10px;
//   }
//   & > div:last-child {
//     margin-right: 0;
//   }
// `;

// const PrevButton = styled.div`
//   position: absolute;
//   z-index: 5;
//   left: 0;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   width: 35px;
//   height: 35px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(255, 255, 255, 0.5);
//   border-radius: 35px;
//   backdrop-filter: blur(5px);
// `;
// const NextButton = styled.div`
//   position: absolute;
//   z-index: 5;
//   right: ${paddingStyle.pcPadding};
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: pointer;
//   width: 35px;
//   height: 35px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: rgba(255, 255, 255, 0.5);
//   border-radius: 35px;
//   backdrop-filter: blur(5px);
// `;
interface ListProps {
  list: string[];
}

const CategoryContents = ({ list }: ListProps): JSX.Element => {
  // const slideRef = useRef<HTMLDivElement | null>(null); //!
  // const preRef = useRef<HTMLDivElement | null>(null);
  // const nextRef = useRef<HTMLDivElement | null>(null);

  // const [slide, setSlide] = useState<number | string>(0);//!
  // const [pre, setPre] = useState<string>('none');
  // const [next, setNext] = useState<string>('flex');
  // const clickhandler = () => {
  //   if(slide === 0) {
  //     setSlide(`calc(-100% + 100vw - ${paddingStyle.pcPadding} - 30px)`); //!``
  //     setPre('flex');
  //     setNext('none');
  //   } else {
  //     setSlide(0);
  //     setPre('none');
  //     setNext('flex');
  //   }
  // };

  // useEffect(() => {
  //   const slideCurrent = slideRef.current;
  //   const preCurrent = preRef.current;
  //   const nextCurrent = nextRef.current;
  //   if (slideCurrent && preCurrent && nextCurrent) {
  //     slideCurrent.style.transform = `translateX(${slide})`;
  //     preCurrent.style.display = `${pre}`;
  //     nextCurrent.style.display = `${next}`;
  //   }
  // }, [slide, pre, next]);

  return (
    <Container>
      {/* <Slide>
        <SlideWrap ref={slideRef}>
          {mainList.map((data: string, index: number) => (
            <Button key={index} link="#" text={data} />
          ))}
        </SlideWrap>
        <PrevButton onClick ={clickhandler} ref={preRef}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PrevButton>
        <NextButton onClick={clickhandler} ref={nextRef}>
          <FontAwesomeIcon icon={faArrowRight} />
        </NextButton>
      </Slide> */}
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerGroup={12}
        allowTouchMove={false}
        slidesPerView="auto"
        spaceBetween={10}
      >
        {list.map((data, index) => (
          <SwiperSlide key={index}>
            <Button link={`/sub/${data}`} text={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CategoryContents;
