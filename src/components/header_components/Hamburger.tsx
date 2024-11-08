import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Container = styled.div`
width: 20px;
display: flex;
align-items: center;
justify-content: center;
display: none;
@media screen and (max-width: 1024px){
  display: block;
}
`;

const Hamburger = ():JSX.Element => {
  return <Container>
    <FontAwesomeIcon icon={faBars} />
  </Container>;
};

export default Hamburger;