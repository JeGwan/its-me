import Button from "@components/atoms/Button";
import Title from "@components/atoms/Titles";
import AppSwiper, { SwiperSlide } from "@components/modules/AppSwiper";
import Alert from "@components/templates/Alert";
import Container from "@components/templates/Container";
import PortfolioModal from "@components/templates/PortfolioModal";
import { portfolios } from "@lib/constants";
import { Portfolio } from "@lib/types";
import styleVariables from "@styles/variables";
import { useState } from "react";
import styled from "styled-components";

const HomePageComp = styled.div`
  & > .header {
    position: relative;
    padding-bottom: 100px; // thumbnail 때문에
    margin-bottom: 50px; // thumbnail 때문에
    & > .say-hello {
      position: absolute;
      left: 0;
      bottom: 0;
    }
    & > .title {
      font-size: 4rem;
      line-height: 1.4;
      & > .blue {
        font-size: 5.5rem;
        line-height: 1.1;
        font-weight: bold;
        color: ${styleVariables.colors.primary};
      }
      & > .bold {
        font-weight: bold;
      }
      @media screen and (max-width: ${styleVariables.media.mobile}px) {
        font-size: 3rem;
        & > .blue {
          font-size: 4rem;
        }
      }
    }

    & > .thumbnail {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      margin-left: auto;
      border-radius: 100%;
      width: 330px;
      height: 330px;
      overflow: hidden;
      transition: all 0.3s;
      @media screen and (max-width: 600px) {
        top: auto;
        width: 200px;
        height: 200px;
        bottom: 0;
      }
      @media screen and (max-width: 480px) {
        width: 150px;
        height: 150px;
      }
      @media screen and (max-width: 385px) {
        width: 120px;
        height: 120px;
      }
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
    & > .image-swiper {
      margin: 0 -1.6rem;
      padding-bottom: 4rem;
      .swiper-slide {
        & > .thumbnail {
          border: 1px solid ${styleVariables.colors.grey3};
          height: 300px;
          overflow: hidden;
          & > img {
            transition: all 0.3s;
            transform: scale(0.8);
            &:hover {
              transform: scale(0.9);
            }
            cursor: pointer;
            object-fit: contain;
            width: 100%;
            height: 100%;
          }
        }
        & > .title {
          margin: 1rem 0;
          text-align: center;
          color: ${styleVariables.colors.grey3};
          font-weight: bold;
        }
      }
    }
  }
`;

const HomePage = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [portfolio, setPortfolio] = useState<Portfolio>();
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
            <span className="bold">비즈니스</span>
            를 이해합니다
            <br />
            <span className="bold">유저</span>의{" "}
            <span className="bold">시각</span>
            으로 봅니다
            <br />
            <span className="bold">소통</span>이 잘 되는{" "}
            <span className="bold">개발자</span>
            <br />
            <span className="blue">오제관</span> 입니다!
          </h2>
          <div className="thumbnail">
            <img src="/images/profile.webp" alt="" />
          </div>
          <Button
            type="primary"
            className="say-hello"
            onClick={() => setAlertVisible(true)}
          >
            인사하기 👋
          </Button>
        </div>
        <div className="body">
          <Title level={1}>본인을 한문장으로 소개한다면?</Title>
          <p>
            비효율을 개선하고, 꿈을 현실로 만들어주는 엔지니어! 👨🏻‍💻 코딩하는 것을
            너무나 사랑하는 ❤️ 저는 오제관입니다.
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
          <PortfolioModal
            visible={!!portfolio}
            portfolio={portfolio}
            onClose={() => setPortfolio(undefined)}
          />
          <Title level={1}>🧑‍🎨 포트폴리오</Title>
          <AppSwiper
            className="image-swiper"
            slidesPerView={1}
            updateOnWindowResize={true}
            threshold={10}
            spaceBetween={10}
            pagination
          >
            {portfolios.map((portfolio, idx) => (
              <SwiperSlide key={idx}>
                <div className="thumbnail">
                  <img
                    src={portfolio.imageDir + portfolio.thumbnail}
                    alt={`image-${idx}`}
                    onError={(e) => {
                      e.currentTarget.src = styleVariables.assets.picture;
                    }}
                    onClick={() => setPortfolio(portfolio)}
                  />
                </div>
                <p className="title">{portfolio.title}</p>
              </SwiperSlide>
            ))}
          </AppSwiper>
        </div>
      </HomePageComp>
    </Container>
  );
};

export default HomePage;
