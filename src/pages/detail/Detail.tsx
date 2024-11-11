import styled from "styled-components";
import { paddingStyle } from "../../GlobalStyled";
import { useParams } from "react-router-dom";
import LeftWrap from "./detail_components/LeftWrap";
import RightWrap from "./detail_components/RightWrap";

const Container = styled.div`
position: relative;
z-index: 1;
padding: 100px ${paddingStyle.pcPadding};
display: flex;
justify-content: space-between;
`;

const Detail = ():JSX.Element => {
  const {id} = useParams() as {id: string}
  console.log(id);
  return <Container>
    <LeftWrap />
    <RightWrap />
  </Container>;
};

export default Detail;