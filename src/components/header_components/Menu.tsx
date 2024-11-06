import styled from "styled-components";
import MenuButton from "./MenuButton";

const Container = styled.div`
  position: relative;
  z-index: 991;
  height: 100%;
  display: flex;
  align-items: center;
`;

const dataList: string[] = ["TV", "영화", "키즈"];

const Menu = (): JSX.Element => {
  return (
    <Container>
      {dataList.map((data: string, index: number) => (
        <MenuButton title={data} key={index} />
      ))}
    </Container>
  );
};

export default Menu;
