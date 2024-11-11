import { ReactNode } from "react";
import styled from "styled-components";
import { fontSize, fontweight, paddingStyle } from "../../GlobalStyled";

const Container = styled.div`
  width: 100%;
  padding-top: 35px;
  /* padding-left: ${paddingStyle.pcPadding}; */
  padding: 35px 0 35px ${paddingStyle.pcPadding};
  .title {
    font-size: ${fontSize.pcHeadline};
    font-weight: ${fontweight.pcbold};
    padding-bottom: 30px;
  }
  .constents {
    width: 100%;
  }
`;

interface TitleProps {
  title: string;
  children: ReactNode;
}

const Contents = ({ title, children }: TitleProps): JSX.Element => {
  return (
    <Container>
      <div className="title">{title}</div>
      <div className="contents"> {children}</div>
    </Container>
  );
};

export default Contents;
