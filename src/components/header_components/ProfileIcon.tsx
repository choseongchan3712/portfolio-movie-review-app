import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorStyle, paddingStyle } from "../../GlobalStyled";

const Container = styled.div`
padding: ${paddingStyle.subButtonPadding};
border-radius: 5px;
&:hover {
  background-color: ${colorStyle.subButtonColor};
}

.profile {
  a {
    display: block;
    text-decoration: none;
    background-color: #fff;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
}
`;

const ProfileIcon = (): JSX.Element => {
  return (
    <Container>
      <div className="profile">
        <Link to={"#"}></Link>
      </div>
    </Container>
  );
};

export default ProfileIcon;
