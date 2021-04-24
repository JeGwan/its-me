declare global {
  interface Window {
    kakao?: any;
  }
}

export interface User {
  name: string;
  age: number;
}

export interface Address {
  zip: string;
  road: string;
  jibeon: string;
  detail: string;
  sido: string;
  sigungu: string;
  dong: string;
  latitude: number;
  longitude: number;
}

export interface Portfolio {
  title: string;
  desc: string;
  thumbnail: string;
  imageDir: string;
  images: string[];
  links?: {
    title: string;
    url: string;
  }[];
}
