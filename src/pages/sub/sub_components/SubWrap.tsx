import styled from "styled-components";
import { testSubArr } from "../../../API";
import SubContents from "./SubContents";

const Container = styled.div `
width: 100%;
display: grid;
grid-template-columns: repeat(6, 1fr);
row-gap: 20px;
column-gap: 10px;
`;

const SubWrap = ():JSX.Element => {
  return <Container>
    {
      testSubArr.map((data, index)=>(
        <SubContents key={index}/>
      ))
    }
  </Container>;
};

export default SubWrap;