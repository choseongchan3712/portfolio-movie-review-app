import styled from "styled-components";
import { colorStyle, fontweight, paddingStyle } from "../../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 50vw;
  border-radius: 0 0 10px 10px;
  background-color: rgb(28, 32, 36);
`;

const ImgContents = styled.div`
  width: 100%;
  height: 80%;
  background-color: gray;
`;
const ContentsInfo = styled.div`
  width: 100%;
  height: 20%;
  padding: 0 ${paddingStyle.pcPadding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 38px;
    font-weight: ${fontweight.pcbold};
    padding-bottom: 20px;
  }
  .info {
    display: flex;
    align-items: center;
    svg {
      color: rgb(218, 182, 0);
      font-size: 14px;
      padding-right: 5px;
    }
    .dot {
      padding: 0 7px;
    }

    .runtime {
      padding-right: 5px;
    }
  }
`;
const Age = styled.div`
font-size: 12px;
font-weight: ${fontweight.pcbold};
height: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 0 3px;
background-color: ${colorStyle.buttonHoverColor};
border-radius: 20%;
`;

const ContentsBox = (): JSX.Element => {
  return (
    <Container>
      <ImgContents />
      <ContentsInfo>
        <div className="title">인천상륙작전</div>
        <div className="info">
          <FontAwesomeIcon icon={faStar} />
          <div className="rate">4.5</div>
          <div className="dot">•</div>
          <div className="genre">전쟁</div>
          <div className="dot">•</div>
          <div className="release">2016</div>
          <div className="dot">•</div>
          <div className="runtime">1시간 51분</div>
          <Age>12+</Age>
        </div>
      </ContentsInfo>
    </Container>
  );
};

export default ContentsBox;
