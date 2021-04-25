import { Portfolio } from "./types";

export const APP_NAME = "It's me : 개발자 오제관 자기소개서";
export const contacts: { type: string; value: string; link?: string }[] = [
  {
    type: "email",
    value: "emperorvv@gmail.com",
    link: "mailto:emperorvv@gmail.com",
  },
  { type: "github", value: "https://github.com/JeGwan" },
  { type: "kakao", value: "https://open.kakao.com/o/s36YmZ9c" },
];
export const techStacks: { title: string; stacks: string[] }[] = [
  {
    title: "Front-end(Web)",
    stacks: [
      "TypeScript.js",
      "Node.js",
      "Next.js",
      "React.js",
      "GraphQL",
      "ApolloClient",
      "Axios",
      "dotenv",
      "sass",
      "less",
      "styled-components",
      "Swiper.js",
      "dayjs",
      "Moment.js",
      "ant-design",
    ],
  },
  { title: "Front-end(Mobile)", stacks: ["React Native", "expo"] },
  {
    title: "Back-end",
    stacks: [
      "TypeScript.js",
      "Node.js",
      "express.js",
      "ApolloServer",
      "TypeGraphQL",
      "TypeORM",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "PHP",
      "CentOS",
      "Ubuntu",
      "Nginx",
      "Apache",
    ],
  },
  {
    title: "Infra",
    stacks: [
      "AWS EC2",
      "AWS Lightsail",
      "AWS Route53",
      "AWS S3",
      "AWS IAM",
      "AWS Congnito",
    ],
  },
  {
    title: "Tool",
    stacks: [
      "Postman",
      "Zeplin",
      "Firebase",
      "BitBucket",
      "JIRA",
      "Docker",
      "Slack",
      "Github",
      "Photoshop",
      "Illustrator",
    ],
  },
];

export const portfolios: Portfolio[] = [
  {
    title: "Warranty: 동네프로 유저용 웹사이트",
    desc:
      "컴퓨터 또는 모니터 판매업체와 전국의 수리 기사들을 매칭하는 플랫폼 동네프로의 유저 접수 사이트",
    imageDir: "/images/portfolios/warranty/",
    thumbnail: "1.webp",
    images: ["1.png", "2.png", "3.png", "4.png"],
    links: [{ title: "Warranty", url: "https://warranty.dongnepro.com" }],
  },
  {
    title: "WeView : 전자 제품 리뷰 웹사이트",
    desc:
      "우리동네프로들에서 기획하고 개발했던 전자 제품 리뷰용 웹 서비스입니다.",
    imageDir: "/images/portfolios/weview/",
    thumbnail: "1.webp",
    images: ["1.png", "2.png", "3.png", "4.png"],
    links: [{ title: "WeView", url: "https://weview.info" }],
  },
  {
    title: "SiteVision : 서울대 토목연구실 프로젝트",
    desc:
      "건설 현장의 영상을 머신러닝을 통해 분석하여 안전성, 생산성 등을 평가하는 프로젝트 입니다. 웹 풀스택으로 개발했습니다.",
    imageDir: "/images/portfolios/sitevision/",
    thumbnail: "1.webp",
    images: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    links: [{ title: "SiteVison", url: "http://sitevision.snu.ac.kr/" }],
  },
];
