import React from "react";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination]);
const AppSwiper = ({ children, style, ...props }: Swiper) => {
  return (
    <Swiper style={style} {...props}>
      {children}
    </Swiper>
  );
};
export { SwiperSlide };
export default AppSwiper;
