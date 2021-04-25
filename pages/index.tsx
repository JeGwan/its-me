import Button from "@components/atoms/Button";
import Hint from "@components/atoms/Hint";
import Tag from "@components/atoms/Tag";
import Title from "@components/atoms/Titles";
import AppSwiper, { SwiperSlide } from "@components/modules/AppSwiper";
import Alert from "@components/templates/Alert";
import Container from "@components/templates/Container";
import PortfolioModal from "@components/templates/PortfolioModal";
import { contacts, portfolios, techStacks } from "@lib/constants";
import { Portfolio } from "@lib/types";
import styleVariables from "@styles/variables";
import React, { useState } from "react";
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
      font-weight: bolder;
      & > .blue {
        color: ${styleVariables.colors.primary};
      }
      @media screen and (max-width: ${styleVariables.media.mobile}px) {
        font-size: 3rem;
      }
    }

    & > .thumbnail {
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      margin-left: auto;
      border-radius: 100%;
      width: 30vw;
      height: 30vw;
      max-width: 330px;
      max-height: 330px;
      overflow: hidden;
      transition: all 0.3s;
      @media screen and (max-width: 480px) {
        top: auto;
        bottom: 0;
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
    & > ol {
      list-style: decimal;
      margin-left: 2.5rem;
    }
    & > p {
      margin: 1rem 0;
    }
    & > .stacks {
      line-height: 3.6rem;
    }
    & > .image-swiper {
      margin: 0 -1.6rem;
      padding-bottom: 4rem;
      .swiper-slide {
        cursor: pointer;
        & > .thumbnail {
          height: 300px;
          overflow: hidden;
          & > img {
            transition: all 0.3s;
            transform: scale(0.8);
            &:hover {
              transform: scale(0.9);
            }
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
    & > .contact {
      & > dl {
        display: flex;
        align-items: flex-start;
        dt {
          flex: 0 0 80px;
          margin-right: 0.8rem;
          color: ${styleVariables.colors.grey3};
        }
        dd {
          font-weight: bold;
          word-break: break-all;
          a {
            color: ${styleVariables.colors.grey1};
          }
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
            비즈니스를 잘 이해합니다 ✔️
            <br />
            유저의 시각으로 봅니다 ✔️
            <br />
            소통이 잘 됩니다 ✔️
            <br />
            개발자 <span className="blue">오제관</span>입니다.
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
          <Title level={1}>👦🏻 한 줄 소개</Title>
          <p>
            비효율을 개선하고, 꿈을 현실로 만들어주는 엔지니어! 코딩하는 것을
            너무나 사랑하는 저는 오제관입니다. ❤️ 👨🏻‍💻
          </p>
          <Title level={1}>😊 저는 이런 사람이에요</Title>
          <ol>
            <li>구성원의 다양성을 존중하고 건강한 협업을 꿈꿉니다.</li>
            <li>
              언제나 배웁니다. 배우는 것 자체를 사랑하고, 그 배움을 실천하고
              나눔으로써 즐거움을 배가 시킵니다.
            </li>
            <li>
              창의적인 시도를 많이 합니다. 여러 공모전에서 수상했었고, 이를
              계기로 졸업 후 창업한 경험이 있습니다.
              <br />
              (물론 망했습니다 😭)
            </li>
            <li>
              실패에서 잘 배웁니다! 창업의 실패. 그리고 스타트업에서 다년간
              일하면서 많은 것을 배웠습니다. 예상하는 것과 시장의 실제 모습은
              높은 확률로 다르며, 오로지 변화하는 생물 같은 시장에게 깨닫고
              배우며 배운 것을 적용해가는 것이 성공하는 자세라고 믿습니다
            </li>
            <li>
              감성적 공대생이며 열심히 삽니다. 학부시절 4.5만점으로 과수석하던
              학기에 교내 축제 버스킹을 하기도 했습니다.
            </li>
          </ol>
          <Title level={1}>⚒️ TechStack</Title>
          <p>Language : TypeScript를 풀스택 기본언어로 쓰고 있습니다.</p>
          <p>
            DB : 주로 RDBMS(PostgreSQL)를 쓰고 필요에 따라 NoSQL(MongoDB)도
            씁니다. ORM으로 TypeORM을 씁니다.
          </p>
          <p>API : GraphQL API를 주로 쓰되 필요에 따라 REST API도 씁니다.</p>
          <p>
            Front-end : Next.js를 기본 프레임워크로 씁니다. 스타일 라이브러리로
            styled-component를 씁니다.
          </p>
          <p>
            Mobile: React Native로 앱을 만들고 PlayStore, AppStore 크로스
            플랫폼으로 배포한 경험이 있습니다.
          </p>
          {techStacks.map(({ title, stacks }, tsIndex) => {
            return (
              <React.Fragment key={tsIndex}>
                <Title level={4}>{title}</Title>
                <p className="stacks">
                  {stacks.map((stack, sIndex) => (
                    <Tag key={sIndex}>{stack}</Tag>
                  ))}
                </p>
              </React.Fragment>
            );
          })}
          {/* <Title level={1}>📚 읽은 책들</Title>
          <Title level={1}>😀 개발 관련 대외 활동</Title>
          <Title level={1}>🏆 수상</Title>

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
          </p> */}
          <PortfolioModal
            visible={!!portfolio}
            portfolio={portfolio}
            onClose={() => setPortfolio(undefined)}
          />
          <Title level={1}>
            🧑‍🎨 포트폴리오 <Hint>누르면 설명이 나와요!</Hint>
          </Title>
          <AppSwiper
            className="image-swiper"
            slidesPerView={1}
            updateOnWindowResize={true}
            threshold={10}
            spaceBetween={10}
            pagination
          >
            {portfolios.map((portfolio, idx) => (
              <SwiperSlide key={idx} onClick={() => setPortfolio(portfolio)}>
                <div className="thumbnail">
                  <img
                    src={portfolio.imageDir + portfolio.thumbnail}
                    alt={`image-${idx}`}
                    onError={(e) => {
                      e.currentTarget.src = styleVariables.assets.picture;
                    }}
                  />
                </div>
                <p className="title">{portfolio.title}</p>
              </SwiperSlide>
            ))}
          </AppSwiper>
          <Title level={1}>📞 Contact</Title>
          <div className="contact">
            {contacts.map(({ type, value, link }, index) => (
              <dl key={index}>
                <dt>{type}</dt>
                <dd>
                  <a target="_blank" href={link || value}>
                    {value}
                  </a>
                </dd>
              </dl>
            ))}
          </div>
        </div>
      </HomePageComp>
    </Container>
  );
};

export default HomePage;
