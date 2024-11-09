import Button from "../../../components/Button";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { mainList } from "../../../list/categoryList";
import styled from "styled-components";
import { paddingStyle } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  z-index: 4;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const SlideWrap = styled.div`
  /* transform: translateX(calc(-100% + 100vw - ${paddingStyle.pcPadding} - 30px)); */
  position: relative;
  display: flex;
  z-index: 4;
  left: 0;
  top: 0;
  width: fit-content;
  transition: 0.25s ease-in-out;
  & > div {
    margin-right: 10px;
  }
  & > div:last-child {
    margin-right: 0;
  }
`;

const PrevButton = styled.div`
  position: absolute;
  z-index: 5;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 35px;
  backdrop-filter: blur(5px);
`;
const NextButton = styled.div`
  position: absolute;
  z-index: 5;
  right: ${paddingStyle.pcPadding};
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 35px;
  backdrop-filter: blur(5px);
`;


const CategoryContents = (): JSX.Element => {
  const slideRef = useRef<HTMLDivElement | null>(null);

  const [slide, setSlide] = useState<number | string>(0);
  const clickhandler = () => {
    if(slide === 0) {
      setSlide(`calc(-100% + 100vw - ${paddingStyle.pcPadding} - 30px)`);
    } else {
      setSlide(0)
    }
  };

  useEffect(() => {
    const current = slideRef.current;
    if (current) {
      current.style.transform = `translateX(${slide})`;
    }
  }, [slide]);

  return (
    <Container>
      <Slide>
        <SlideWrap ref={slideRef}>
          {mainList.map((data: string, index: number) => (
            <Button key={index} link="#" text={data} />
          ))}
        </SlideWrap>
        <PrevButton onClick ={clickhandler}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </PrevButton>
        <NextButton onClick={clickhandler}>
          <FontAwesomeIcon icon={faArrowRight} />
        </NextButton>
      </Slide>
    </Container>
  );
};

export default CategoryContents;
