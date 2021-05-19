# it's me 나의 자기 소개서

## 1. Pre-requisite

### 1.1. dependencies install

```sh
yarn pre
```

yarn pre 스크립트는 dependencies 와 devDependencies 를 모두 설치하는 스크립트입니다.

### 1.2. environment variable

- `.env.js` 에 개발시 사용할 환경변수를 넣습니다.
- `cp .env-example.js .env.js` 로 시작하시면됩니다.

## 2. Project structure

```
├── components : component root directory
│   ├── atoms : unit components
│   ├── modules : union components
│   └── templates : group of components
├── lib : 앱에 필요한 여러가지
│   ├── api.ts : fetching에 사용할 전반적인 api
│   ├── context.tsx : useContext에 이용될 context
│   ├── types.ts : type definitions
│   └── utils.ts : 커스텀 함수들
├── pages : routes root directory.
├── public : public serve root directory.
│   └── images : image root directory.
└── styles : style root directory.
```
