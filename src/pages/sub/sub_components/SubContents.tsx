import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
height: 10vw;
background-color: gray;
border-radius: 10px;
a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
}
`;

const SubContents = ():JSX.Element => {
  return <Container>
    <Link to={'#'}></Link>
  </Container>;
};

export default SubContents;