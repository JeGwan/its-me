import Button from "@components/atoms/Button";
import Input from "@components/atoms/Input";
import Select from "@components/atoms/Select";
import Title from "@components/atoms/Titles";
import Alert from "@components/templates/Alert";
import Container from "@components/templates/Container";
import styleVariables from "@styles/variables";
import { useState } from "react";
import styled from "styled-components";

const HomePageComp = styled.div`
  .with-transition {
    transform: translateY(0) scale(1);
    opacity: 1;
    -webkit-transition: -webkit-transform 0.7s cubic-bezier(0, 0, 0.2, 1)
        0.0001s,
      opacity 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
    transition: transform 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s,
      opacity 0.7s cubic-bezier(0, 0, 0.2, 1) 0.0001s;
  }
  & > .header {
    display: flex;
    position: relative;
    & > .say-hello {
      position: absolute;
      left: 0;
      bottom: 0;
    }
    & > .title {
      font-size: 3.4rem;
      font-weight: bold;
      line-height: 4.4rem;
      & > .big {
        font-size: 4rem;
      }
      & > .blue {
        color: ${styleVariables.colors.primary};
      }
      @media screen and (max-width: ${styleVariables.media.mobile}px) {
        font-weight: bold;
        font-size: 1.8rem;
        line-height: 2.4rem;
        & > .big {
          font-size: 1.8rem;
        }
      }
    }

    & > .thumbnail {
      margin-left: auto;
      border-radius: 100%;
      width: 40vw;
      height: 40vw;
      max-width: 300px;
      max-height: 300px;
      flex: 0 0 auto;
      overflow: hidden;
      & > img {
        &:hover {
          transform: scale(1.1);
        }
        transition: transform 0.4s;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
  & > .body {
    margin-top: 3rem;
  }
`;
const HomePage = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <Container>
      <Alert
        title="😉 Thank you!"
        style={{ width: 300 }}
        visible={alertVisible}
        onClose={() => setAlertVisible(false)}
      >
        저도 반갑습니다!
      </Alert>
      <HomePageComp>
        <div className="header">
          <h2 className="title">
            <span className="big">Business</span> 를 이해하고,
            <br />
            <span className="big">User</span> 에 눈을 맞추고,
            <br />
            소통이 잘되는 개발자
            <br />
            <span className="big blue">오제관</span>입니다!
          </h2>
          <div className="thumbnail">
            <img src="/images/profile.png" alt="" />
          </div>
          <Button
            className="say-hello"
            type="primary"
            onClick={() => setAlertVisible(true)}
          >
            인사하기 👋
          </Button>
        </div>
        <div className="body">
          <Title level={1}>제관씨는 어떤 사람인가요?</Title>
          <p>
            탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가
            정지된다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기
            위하여 노력하여야 한다. 감사원은 세입·세출의 결산을 매년 검사하여
            대통령과 차년도국회에 그 결과를 보고하여야 한다. 대법관의 임기는
            6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 대한민국의
            영토는 한반도와 그 부속도서로 한다. 국가안전보장회의의 조직·직무범위
            기타 필요한 사항은 법률로 정한다. 헌법개정안이 제2항의 찬성을 얻은
            때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.
            정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는
            헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에
            의하여 해산된다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
            정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 대한민국은
            민주공화국이다. 국가안전보장회의는 대통령이 주재한다.
          </p>
          <Title level={1}>제관씨는 어떨 때 일이 잘되나요?</Title>
          <p>
            탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가
            정지된다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기
            위하여 노력하여야 한다. 감사원은 세입·세출의 결산을 매년 검사하여
            대통령과 차년도국회에 그 결과를 보고하여야 한다. 대법관의 임기는
            6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 대한민국의
            영토는 한반도와 그 부속도서로 한다. 국가안전보장회의의 조직·직무범위
            기타 필요한 사항은 법률로 정한다. 헌법개정안이 제2항의 찬성을 얻은
            때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.
            정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는
            헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에
            의하여 해산된다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
            정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 대한민국은
            민주공화국이다. 국가안전보장회의는 대통령이 주재한다.
          </p>
          <Title level={1}>제관씨가 생각하는 개발자란?</Title>
          <p>
            탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가
            정지된다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기
            위하여 노력하여야 한다. 감사원은 세입·세출의 결산을 매년 검사하여
            대통령과 차년도국회에 그 결과를 보고하여야 한다. 대법관의 임기는
            6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 대한민국의
            영토는 한반도와 그 부속도서로 한다. 국가안전보장회의의 조직·직무범위
            기타 필요한 사항은 법률로 정한다. 헌법개정안이 제2항의 찬성을 얻은
            때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.
            정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는
            헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에
            의하여 해산된다. 선거운동은 각급 선거관리위원회의 관리하에 법률이
            정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 대한민국은
            민주공화국이다. 국가안전보장회의는 대통령이 주재한다.
          </p>
        </div>
      </HomePageComp>
    </Container>
  );
};

export default HomePage;
