import styled from "styled-components";
import ContentsBox from "./ContentsBox";
import InfoWrap from "./InfoWrap";

const Container = styled.div`
width: 67%;
padding: 20px 0;
`;

const LeftWrap = ():JSX.Element => {
  return <Container>
    <ContentsBox />
    <InfoWrap />
  </Container>;
};

export default LeftWrap;