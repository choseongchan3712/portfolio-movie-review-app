import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colorStyle,
  fontSize,
  fontweight,
  paddingStyle,
} from "../../GlobalStyled";

const list: string[] = [
  "드라마",
  "한국영화",
  "예능",
  "한국 TV 프로그램",
  "영문 자막",
  "로맨스",
  "코미디",
  "외국 TV 프로그램",
  "미스터리",
  "어드벤처",
  "공포",
  "범죄",
  "키즈",
  "외국 영화",
  "액션",
  "스릴러",
  "무협",
  "오컬트",
  "애니메이션",
  "판타지",
  "SF",
  "가족",
  "다큐멘터리",
  "성인",
];

const Container = styled.div`
  position: absolute;
  z-index: 991;
  right: 0;
  top: 50px;
  background-color: #272a30;
  display: grid;
  grid-template-columns: 180px 180px 180px;
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.25s ease-in-out;
  transform: scale(0);
  transform-origin: right top;
  a {
    text-decoration: none;
    color: ${colorStyle.mainColor};
    font-size: ${fontSize.pcLabel};
    font-weight: ${fontweight.pcBasic};
    padding: ${paddingStyle.buttonPadding};
    border-radius: 5px;
    &:hover {
      background-color: #3d4045;
    }
  }
`;

const CategoryList = (): JSX.Element => {
  return (
    <Container>
      {list.map((data: string, index: number) => (
        <Link to={"#"} key={index}>
          {data}
        </Link>
      ))}
    </Container>
  );
};

export default CategoryList;
