import styled from "styled-components";
import { paddingStyle } from "../../../GlobalStyled";
import InfoBlock from "./InfoBlock";
import AddInfo from "./AddInfo";

const Container = styled.div`
  width: 80%;
  padding-left: ${paddingStyle.pcPadding};
`;

const InfoWrap = (): JSX.Element => {
  return (
    <Container>
      <InfoBlock
        title="시놉시스"
        info="1950년 6월 25일 북한의 기습 남침으로 사흘 만에 한반도 대부분의 지역을 빼앗긴 된 대한민국. 국제연합군 최고사령관 더글라스 맥아더는 모두의 반대 속 인천상륙작전을 계획한다. 이를 가능케 하는 것은 단 하나, 인천으로 가는 길이 확보되어야 하는 것뿐이다."
      />
      <InfoBlock title="장르" info="전쟁, 드라마, 밀리터리" />
      <InfoBlock
        title="출연진"
        info="이정재, 이범수, 리암니슨, 진세연, 리암 니슨"
      />
      <InfoBlock title="감독" info="이재한" />
      <AddInfo subtitles="한국어" sound="한국어"/>
    </Container>
  );
};

export default InfoWrap;
