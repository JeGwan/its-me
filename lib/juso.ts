import Axios from "axios";
export interface JusoItem {
  roadAddr: string; // "서울특별시 마포구 성암로 301 (상암동)",
  roadAddrPart1: string; // "서울특별시 마포구 성암로 301",
  roadAddrPart2: string; // " (상암동)",
  jibunAddr: string; // "서울특별시 마포구 상암동 1595 한국지역정보개발원(KLID Tower)",
  engAddr: string; // "301, Seongam-ro, Mapo-gu, Seoul",
  zipNo: string; // "03923",
  admCd: string; // "1144012700",
  rnMgtSn: string; // "114403113012",
  bdMgtSn: string; // "1144012700115950000000001",
  detBdNmList: string; // "한국지역정보개발원",
  bdNm: string; // "한국지역정보개발원(KLID Tower)",
  bdKdcd: string; // "0",
  siNm: string; // "서울특별시",
  sggNm: string; // "마포구",
  emdNm: string; // "상암동",
  liNm: string; // "",
  rn: string; // "성암로",
  udrtYn: string; // "0",
  buldMnnm: string; // "301",
  buldSlno: string; // "0",
  mtYn: string; // "0",
  lnbrMnnm: string; // "1595",
  lnbrSlno: string; // "0",
  emdNo: string; // "03"
}
export interface JusoApiResult {
  results: {
    common: {
      totalCount: string; // "1",
      currentPage: string; // "1",
      countPerPage: string; // "5",
      errorCode: string; // "0",
      errorMessage: string; // "정상"
    };
    juso: JusoItem[];
  };
}
interface JusoApiProps {
  currentPage?: number;
  countPerPage?: number;
  keyword: string;
}
export class Juso {
  static isValidKeyword(
    text: string,
    handleMessage: (message: string) => void = () => {}
  ) {
    // * 빈 검색어 제한
    if (!text) {
      handleMessage("검색어를 입력해주세요!");
      return false;
    }

    // * 검색어는 두글자 이상으로 제한
    if (text.length < 2) {
      handleMessage("검색어는 두글자 이상 입력되어야 합니다.");
      return false;
    }

    // * 도로명주소 권장 키워드 체크 구문
    if (/[%=><]/.test(text) === true) {
      handleMessage("특수문자를 입력 할수 없습니다.");
      return false;
    }
    //특정문자열(sql예약어의 앞뒤공백포함) 제거
    const sqlArray = [
      "OR",
      "SELECT",
      "INSERT",
      "DELETE",
      "UPDATE",
      "CREATE",
      "DROP",
      "EXEC",
      "UNION",
      "FETCH",
      "DECLARE",
      "TRUNCATE",
    ];

    let regex;

    for (let i = 0; i < sqlArray.length; i++) {
      regex = new RegExp(sqlArray[i], "gi");
      if (regex.test(text)) {
        handleMessage(
          '"' + sqlArray[i] + '"와(과) 같은 특정문자로 검색할 수 없습니다.'
        );
        return false;
      }
    }
    return true;
  }
  static get({ keyword, countPerPage = 10, currentPage = 1 }: JusoApiProps) {
    return new Promise<JusoApiResult>((resolve, reject) => {
      Axios.get(`https://www.juso.go.kr/addrlink/addrLinkApi.do`, {
        params: {
          confmKey: process.env.JUSO_API_KEY,
          countPerPage,
          currentPage,
          keyword,
          resultType: "json",
        },
      })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(reject);
    });
  }
}
