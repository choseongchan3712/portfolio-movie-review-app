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
  .subtitles {
    width: 95%;
    letter-spacing: 1.5px;
    padding-bottom: 20px;
  }
  .sound {
    width: 95%;
    letter-spacing: 1.5px;
  }
`;

interface InfoProps {
  subtitles: string;
  sound: string;
}

const AddInfo = ({ subtitles, sound }: InfoProps): JSX.Element => {
  return (
    <Container>
      <div className="title">추가 정보</div>
      <div className="subtitles">자막 {subtitles}</div>
      <div className="sound">음성 {sound}</div>
    </Container>
  );
};

export default AddInfo;
