import styled from "styled-components";
import { colorStyle, paddingStyle } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: ${paddingStyle.buttonPadding};
  border-radius: 8px;
  transition: 0.25s ease-in-out;
  margin-right: 20px;
  &:hover {
    background-color: ${colorStyle.subButtonColor};
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const SearchButton = (): JSX.Element => {
  return (
    <Container>
      <Link to={"/search"}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
    </Container>
  );
};

export default SearchButton;
