require("dotenv").config();
// SSR, CSR 모두 환경변수를 공급해주려면 여기서 한번 process.env에 있는 걸 묶어줘야 합니다.
module.exports = {
  env: {
    JUSO_API_KEY: process.env.JUSO_API_KEY,
    KAKAO_REST_KEY: process.env.KAKAO_REST_KEY,
    KAKAO_API_JS_KEY: process.env.KAKAO_API_JS_KEY,
    API_END_POINT: process.env.API_END_POINT,
  },
};
