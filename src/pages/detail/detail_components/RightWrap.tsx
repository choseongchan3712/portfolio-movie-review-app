import styled from "styled-components";
import ReviewWrap from "./ReviewWrap";

const Container = styled.div`
  position: relative;
  width: 33%;
  padding: 20px;
`;

const RightWrap = (): JSX.Element => {
  return <Container>
    <ReviewWrap />
  </Container>;
};

export default RightWrap;
