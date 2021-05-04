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
    img.full {
      display: block;
      width: 100%;
    }
    & > ol {
      list-style: decimal;
      margin-left: 2.5rem;
      & > li {
        margin-bottom: 1em;
        word-break: keep-all;
      }
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
          font-size: 1.8rem;
          line-height: 2.2rem;
        }
      }
    }
  }
  & > .say-hello {
    position: fixed;
    right: calc(10px + env(safe-area-inset-right, 16px));
    bottom: calc(10px + env(safe-area-inset-right, 16px));
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
            비즈니스를 잘 이해합니다
            <br />
            유저의 시각으로 봅니다
            <br />
            소통이 잘 됩니다
            <br />
            개발자 <span className="blue">오제관</span>입니다.
          </h2>
          <div className="thumbnail">
            <img src="/images/profile.webp" alt="" />
          </div>
        </div>
        <div className="body">
          <Title level={1}>👦🏻 한 줄 소개</Title>
          <p>
            비효율을 개선하고, 꿈을 현실로 만들어주는 엔지니어! 코딩하는 것을
            너무나 사랑하는 저는 오제관입니다. ❤️ 👨🏻‍💻
          </p>
          <Title level={1}>🤝 팀원으로서의 태도</Title>
          <Title level={3}>
            "경쾌하게" 누구를 만나든 어떤 일을 하든 먼저 경쾌한 바이브로
            임합니다.
          </Title>
          <p>
            경쾌한 자세는 어려운 일도 쉽게 만들고, 문제가 닥칠 때 압박감보다
            창의적인 해결방법이 떠오르게 해주기 때문입니다.
          </p>
          <Title level={3}>한 명 보다 나은 팀의 힘을 믿습니다.</Title>
          <p>
            우리는 다양하기에 더 강력하다 믿고, 그 다양성을 존중하며 건강한
            협업을 꿈꿉니다.
          </p>
          <Title level={3}>서로를 위한 서포터</Title>
          <p>
            동료들이 도움이 필요로 할 때 도움을 줄 수 있음에 감사하고 언제나
            기쁘게 도와드리려 합니다.
          </p>
          <Title level={3}>자존감은 살리고 자존심은 버리고</Title>
          <p>
            자존감은 나를 지탱해주는 힘으로 삼되 협업에서 불필요한 자존심은
            빠르게 버립니다.
          </p>
          <Title level={3}>배움 ♾️</Title>
          <p>
            언제나 배웁니다. 배우는 것 자체를 사랑하고, 그 배움을 실천하고
            나눔으로써 즐거움을 배가시킵니다.
          </p>
          <Title level={3}>명료하게 말하기</Title>
          <p>
            말을 장황하게 하거나 너무 지엽적이거나 추상적으로 표현하지 않으려
            합니다. 구체적이고 간결하며 명료하게 전달합니다.
          </p>
          <Title level={3}>양껏 맘껏 요청해주세요!</Title>
          <p>
            변경 요청은 언제나 환영하고 그 과정에서 적극적으로 경청하며
            의사결정에 협조합니다.
          </p>
          <Title level={1}>🌏 시장에 대한 나의 태도</Title>
          <p>
            시장은 trial and error 방식으로만 그 모습을 가늠할 수 있다고
            생각합니다. 예상되는 시장의 모습과 실제 모습은 높은 확률로 다르며,
            오로지 변화하는 생물 같은 시장에게 fast fail 하며 깨닫고 배우며 배운
            것을 적용하고 pivot 하는 것이 성공하는 자세이며 삶 전체를 관통하는
            법칙이라 믿습니다.
          </p>
          <Title level={1}>👦🏻 개발자로서의 태도</Title>
          <ol>
            <li>
              개발이 허들이 되지 않게 합니다. 안 해본 것 안 가본 길을 피하려고
              기능을 타협하지 않으려 합니다. 제가 편하기보다 기획자의 의도를
              그대로 반영하고 유저의 편의성을 위해 노력할 때 좋은 제품이 나오기
              때문입니다.
            </li>
            <li>
              어떠한 feature를 추가할 때 수행해야 할 to do list를 더는 쪼갤 수
              없을 정도로 잘게 쪼개서 글로 써봅니다. 그 뒤 step by step으로
              pseudo 코드를 작성해놓고 작업합니다. 이렇게 하면 커다랗고 다소
              손에 잡히지 않던 기능도 unit task들이 되어 하나하나 수월히 작업할
              수 있습니다. 또한 작업에 빠지다 보면 어떤 지엽적인 막힘 때문에
              본질을 잊게 되기도 하는데 이렇게 프레임을 잡아놓는다면 큰 그림을
              지키고 헤매지 않게 되기 때문입니다.
            </li>
            <li>
              이왕이면 기능의 무결성, performance 외에도 코드가 팀원들에게
              직관적으로 인식될 수 있는지, 유저에게 충분한 affordance를 주는지
              interaction과 animation이 매끄럽고 어울리는지. 다각도로 퀄리티를
              체크하고 배포합니다.
            </li>
            <li>
              가독성과 유지보수를 위해 변수명이 길어져도 할당되는 값을 충분히
              나타내게 씁니다.
            </li>
            <li>
              이슈가 있을 땐 가장 먼저 problem definition을 합니다. 문제가
              무엇인지 어떤 배경과 context를 갖고있는지 명료하다면 회의 시간도
              단축되고 솔루션도 쉽게 나오기 때문입니다.
            </li>
            <li>
              refactoring & decoupling을 자주 합니다. 재사용성 외에도 규모가
              커져도 유지보수가 용이하게끔 하며 각 단위 요소들이 의존성 없이
              스스로의 무결성을 확보할 수 있기 때문입니다.
            </li>
            <li>
              다만 처음부터 코드를 분리하는 데 시간을 쓰려고 하지 않습니다. 기능
              구현이 되는지를 먼저 체크하고 해당하는 기능의 재사용 가능성이
              예측된다면, 그때 사용하기 좋게 묶을 방법을 고민해야 시간 낭비가
              줄기 때문입니다.
            </li>
            <li>
              이미 만들어 두었던 것의 개선 아이디어가 전혀 다른 일을 할 때
              떠오를 때가 있습니다. 여유가 된다면 떠오르는 즉시 적용하고 여유가
              없거나 너무 큰 일이라면 리마인드 하기 위해 캘린더에 아이디어를
              간략히 적어놓습니다.
            </li>
            <li>
              지금 작업하거나 설정한 일이 빈도가 아주 낮은데 나중에 다시 볼 때
              잘 기억이 안 날 거 같거나 헤맬 것 같다면 화면녹화로 나를 위한
              설명을 찍어 놓거나 어딘가에 글로 정리합니다. 기억은 garbage
              collector가 있지만, 기록은 immutable이기 때문입니다.
            </li>
            <li>
              생산성 향상을 위해 shortcut을 숙지하고 code snippet, custom
              shortcut 등을 필요할 때마다 만들어 놓습니다. 처음엔 귀찮지만, 어느
              순간 잘 추가되지 않는 시점이 올 때 수많은 시간을 단축해주기
              때문입니다.
            </li>
            <li>
              공부할 때는 가급적 찬찬히 깊게 글을 보려고 합니다. 깊게 보지 않고
              겉핥기로 넘어가면 분명 언젠가 몇 번이고 그 내용을 다시 찾아보기
              때문입니다. 한번 깊게 몰입하고 파는 한 시간이 수십번의 2분보다
              낫다는 것을 매번 깨닫습니다.
            </li>
          </ol>
          <Title level={1}>⚒️ TechStack</Title>
          <p>Language : TypeScript를 Full-stack 기본언어로 쓰고 있습니다.</p>
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

          <Title level={1}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.notion.so/6cbab5168b144930ad964c564536eeeb"
            >
              📃 경력 및 프로젝트 : Notion page
            </a>
          </Title>
          <Title level={1}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.notion.so/04856bda27a14f28bef515040aadd991"
            >
              🏆 수상 및 활동 : Notion page
            </a>
          </Title>
          <Title level={1}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.notion.so/immutable-e82ceab0c8734ba8a9eaaba5c27ff128"
            >
              📚 블로그 겸 공부 기록 : Notion page
            </a>
          </Title>
          {/* <Title level={1}>📚 읽은 책들</Title> */}

          <Title level={1}>
            <a target="_blank" href="/portfolio.pdf">
              🧑‍🎨 포트폴리오
            </a>
          </Title>
          {/* 
          // 포트폴리오 는 준비될 때까지 PDF로 하기
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
          </AppSwiper> */}
          <Title level={1}>📕 이 사이트는요!</Title>
          <Title level={3}>Github repository</Title>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JeGwan/its-me"
          >
            https://github.com/JeGwan/its-me
          </a>
          <Title level={3}>Lighthouse score</Title>
          <img
            className="full"
            src="/lighthouse/2021-04-28.webp"
            alt="lighthouse"
          />
          <p>2021-04-28 기준</p>
          <Title level={1}>📞 Contact</Title>
          <div className="contact">
            {contacts.map(({ type, value, link }, index) => (
              <dl key={index}>
                <dt>{type}</dt>
                <dd>
                  <a target="_blank" rel="noreferrer" href={link || value}>
                    {value}
                  </a>
                </dd>
              </dl>
            ))}
          </div>
        </div>
        <Button
          type="primary"
          className="say-hello"
          onClick={() => setAlertVisible(true)}
        >
          인사하기 👋
        </Button>
      </HomePageComp>
    </Container>
  );
};

export default HomePage;
