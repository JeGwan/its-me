import Axios from "axios";

export interface KakaoMapAddressApiDocmument {
  address: {
    address_name: string; // "서울 강남구 자곡동 618"
    b_code: string; // "1168011200"
    h_code: string; // "1168070000"
    main_address_no: string; // "618"
    mountain_yn: string; // "N"
    region_1depth_name: string; // "서울"
    region_2depth_name: string; // "강남구"
    region_3depth_h_name: string; // "세곡동"
    region_3depth_name: string; // "자곡동"
    sub_address_no: string; // ""
    x: string; // "127.090685322302"
    y: string; // "37.4722254686827"
  };
  address_name: string; // "서울 강남구 자곡로3길 45";
  address_type: string; // "ROAD_ADDR";
  road_address: {
    address_name: string; // "서울 강남구 자곡로3길 45";
    building_name: string; // "LH 강남브리즈힐";
    main_building_no: string; // "45";
    region_1depth_name: string; // "서울";
    region_2depth_name: string; // "강남구";
    region_3depth_name: string; // "자곡동";
    road_name: string; // "자곡로3길";
    sub_building_no: string; // "";
    underground_yn: string; // "N";
    x: string; // "127.090685322302";
    y: string; // "37.4722254686827";
    zone_no: string; // "06374";
  };
  x: string; // "127.090685322302";
  y: string; // "37.4722254686827";
}
interface KakaoMapAddressApiResult {
  documents: KakaoMapAddressApiDocmument[];
  meta: { is_end: boolean; pageable_count: number; total_count: number };
}

export const kakaoMapAddressApi = async (address: string) => {
  return new Promise<KakaoMapAddressApiResult>((resolve, reject) => {
    Axios.get(`https://dapi.kakao.com/v2/local/search/address.json`, {
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_REST_KEY}`,
      },
      params: { query: address },
    })
      .then(({ data }) => {
        resolve(data);
      })
      .catch(reject);
  });
};

export const makeMarker = (latitude: number, longitude: number) => {
  const maps = window?.kakao?.maps;
  if (!maps) throw Error("kakao map api가 준비되지 않았습니다.");
  // 가운데에 마커 추가
  const position = new maps.LatLng(latitude, longitude);
  const marker = new maps.Marker({ position, /* image, */ zIndex: 6 });
  return marker;
};
