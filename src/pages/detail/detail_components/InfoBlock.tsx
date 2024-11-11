import styled from "styled-components";
import { fontweight, paddingStyle } from "../../../GlobalStyled";

const Container = styled.div`
  width: 100%;
  padding: ${paddingStyle.pcPadding} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  font-weight: ${fontweight.pcbold};
  line-height: 20px;
  .title {
    width: 100%;
    padding-bottom: 20px;
  }
  .info {
    width: 95%;
    letter-spacing: -1.5px;
  }
`;

interface InfoProps {
  title: string;
  info: string;
}

const InfoBlock = ({ title, info }: InfoProps): JSX.Element => {
  return (
    <Container>
      <div className="title">{title}</div>
      <div className="info">{info}</div>
    </Container>
  );
};

export default InfoBlock;
