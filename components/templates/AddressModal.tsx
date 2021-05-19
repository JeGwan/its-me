import { Juso, JusoApiResult, JusoItem } from "@lib/juso";
import { Address } from "@lib/types";
import { errHandler } from "@lib/utils";
import React, { useState } from "react";
import Modal, { ModalProps } from "./Modal";
import styled from "styled-components";
import { kakaoMapAddressApi } from "@lib/kakao";
import Input from "@components/atoms/Input";
import Button from "@components/atoms/Button";
import DataDesc from "@components/atoms/DataDesc";
import Pagination from "@components/organisms/Pagination";

const AddressModalComp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & > form {
    display: flex;
    align-items: center;
    & > input {
      flex: auto;
      margin-right: 0.4rem;
    }
  }
  & > .result-desc {
    font-size: 12px;
    color: rgb(85, 85, 85);
    margin: 12px 0px;
  }
  & > ul.address-list {
    flex: 1 1 auto;
    overflow-y: auto;
    margin: 0 -16px;
    background-color: #eee;
    padding: 16px;
    & > li {
      margin-bottom: 12px;
      background-color: white;
      border-radius: 8px;
      padding: 16px;
      transition: all 0.3s;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      &:hover {
        background-color: #ffe2d4;
      }
      dl {
        dt {
          flex: 0 0 80px;
          margin-right: 8px;
        }
        dd {
          word-break: break-all;
        }
      }
    }
  }
  & > .tips {
    margin: 20px 0 0;
    .tip {
      margin: 16px 0 8px;
    }
    .example {
      margin-left: 8px;
      font-size: 12px;
      color: #555;
    }
    h3 {
      font-size: 16px;
    }
  }
`;
interface Props extends ModalProps {
  onSelectAddress?: (address: Address) => void;
}
const countPerPage = 5;
const AddressModal = ({ onSelectAddress = () => {}, ...props }: Props) => {
  const [fetchedData, setFetchedData] = useState<JusoApiResult>();
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);

  const fetch = (keyword: string, currentPage = 1) => {
    if (!Juso.isValidKeyword(keyword, alert)) return;
    if (loading) return alert("결과를 가져오고 있습니다.");
    setLoading(true);
    Juso.get({ keyword, countPerPage, currentPage })
      .then((data) => {
        if (data.results.common.errorMessage !== "정상") {
          alert(data.results.common.errorMessage);
        } else {
          setFetched(true);
          setFetchedData(data);
        }
      })
      .catch(errHandler)
      .finally(() => setTimeout(() => setLoading(false), 500));
  };

  const handleSelect = (juso: JusoItem) => {
    // juso.roadAddrPart1 로 검색하는게 중요함. 뒤에 건물 이름 따위가 안나오게 카카오 주소검색 API를 호출해야함.
    kakaoMapAddressApi(juso.roadAddrPart1)
      .then((response) => {
        if (response?.documents?.[0]?.x) {
          onSelectAddress({
            zip: juso.zipNo,
            road: juso.roadAddrPart1,
            jibeon: juso.jibunAddr,
            sido: juso.siNm,
            sigungu: juso.sggNm,
            dong: juso.emdNm,
            latitude: Number(response.documents[0].y),
            longitude: Number(response.documents[0].x),
            detail: "",
          });
        } else {
          alert("위경도 좌표를 가져올 수 없는 주소지입니다.");
        }
      })
      .catch(errHandler);
  };

  return (
    <Modal title="주소 검색" bodyStyle={{ paddingBottom: 0 }} {...props}>
      <AddressModalComp>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (keyword === "") {
              if (!fetchedData) alert("검색어를 입력해주세요");
              // 이때는 초기화인 상태라하자.
              setFetched(false);
              setFetchedData(undefined);
              return;
            }
            fetch(keyword);
          }}
        >
          <Input
            placeholder="도로명, 건물명, 지명"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            loading={loading}
          />
          <Button type="primary" htmlType="submit">
            검색
          </Button>
        </form>

        {fetchedData?.results.juso.length ? (
          <>
            <h3 className="result-desc">
              검색 결과 총 {fetchedData.results.common.totalCount}건
            </h3>
            <ul className="address-list">
              {fetchedData.results.juso.map((juso, key) => (
                <li key={key} onClick={() => handleSelect(juso)}>
                  <DataDesc title="우편번호" desc={juso.zipNo} />
                  <DataDesc title="도로명" desc={juso.roadAddr} />
                  <DataDesc title="지번주소" desc={juso.jibunAddr} />
                </li>
              ))}
            </ul>
            <Pagination
              style={{
                margin: "0 -16px",
                padding: "8px 16px",
                borderTop: "1px solid #eee",
              }}
              pageSize={countPerPage}
              current={Number(fetchedData.results.common.currentPage) || 1}
              total={Number(fetchedData.results.common.totalCount) || 1}
              onChange={(page) => {
                fetch(keyword, page);
              }}
            />
            {/* <div
              showSizeChanger={false}
              pageSize={countPerPage}
              
            /> */}
          </>
        ) : fetched ? (
          <h3 className="result-desc">검색 결과가 없습니다.</h3>
        ) : (
          <div className="tips">
            <div className="tip">건물명(아파트명)</div>
            <div className="example">예시) 독립기념관</div>
            <div className="tip">도로명 + 건물번호</div>
            <div className="example">예시) 뚝섬로 376</div>
            <div className="tip">지역명(동/리) + 번지</div>
            <div className="example">예시) 성수동2가 333 - 15</div>
          </div>
        )}
      </AddressModalComp>
    </Modal>
  );
};

export default AddressModal;
