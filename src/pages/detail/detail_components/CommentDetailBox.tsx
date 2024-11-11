import styled from "styled-components";
import { colorStyle, fontSize, fontweight } from "../../../GlobalStyled";

const Container = styled.li`
padding: 20px 0;
border-bottom: 2px solid rgba(255, 255, 255, 0.15);
.user_name {
  color: ${colorStyle.subFontColor};
  font-weight: ${fontweight.pcbold};
  font-size: ${fontSize.pcTitle};
  padding-bottom: 20px;
}
`;

interface DetailProps {
  detail: string;
}

const CommentDetailBox = ({ detail }: DetailProps): JSX.Element => {
  return (
    <Container>
      <div className="user_name">user_1</div>
      <div className="detail">{detail}</div>
    </Container>
  );
};

export default CommentDetailBox;
