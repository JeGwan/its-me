import Button from "@components/atoms/Button";
import Container from "@components/templates/Container";
import axios from "axios";
import { GetServerSideProps } from "next";
import React from "react";

interface Props {
  data?: any;
}

const apartment = ({ data }: Props) => {
  const apartApi = () => {
    axios
      .get(
        "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade?serviceKey=" +
          process.env.DATA_GO_KEY,
        {
          params: {
            serviceKey: process.env.DATA_GO_KEY,
            LAWD_CD: "11110",
            DEAL_YMD: "201512",
          },
        }
      )
      .then(({ data }) => console.log(data))
      .catch(console.error);
  };
  return (
    <Container>
      <Button onClick={apartApi}>가져오기</Button>
      <div></div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { data } = await axios.get(
    "http://api.seibro.or.kr/openapi/service/StockSvc/getDividendRankN1?serviceKey=" +
      process.env.DATA_GO_KEY,
    {
      params: {
        stkTpcd: 1, // 1. 보통주 2.우선주
        listTpcd: 11, // 11. 유가증권시장 12.코스닥시장 13.K-OTC시장 14.코넥스시장 50.기타비상장
        rankTpcd: 1, // 1.시가배당율, 2.액면가배당율
        year: 2020, // 기준년도
        numOfRows: 10, // 페이지당 데이터 수
        pageNo: 1, // 페이지 번호
      },
    }
  );

  return { props: { data } };
};
export default apartment;
