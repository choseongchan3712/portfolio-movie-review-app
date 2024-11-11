import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  colorStyle,
  fontSize,
  fontweight,
  paddingStyle,
} from "../../GlobalStyled";

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

interface ListProps {
  list: string[];
}

const CategoryList = ({list}: ListProps): JSX.Element => {
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
