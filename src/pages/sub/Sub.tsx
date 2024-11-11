import { useParams } from "react-router-dom";
import styled from "styled-components";
import { paddingStyle } from "../../GlobalStyled";
import SubWrap from "./sub_components/SubWrap";

const Container = styled.div`
position: relative;
top: 0;
left: 0;
z-index: 1;
width: 100%;
overflow: hidden;
padding: 100px ${paddingStyle.pcPadding} 100px ${paddingStyle.pcPadding};
`;

const Sub = (): JSX.Element => {
  const { id } = useParams() as {id: string};
  console.log(id);

  return <Container>
    <SubWrap />
  </Container>;
};

export default Sub;
