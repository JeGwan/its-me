import React from "react";
import Modal, { ModalProps } from "./Modal";
import styled from "styled-components";
import { Portfolio } from "@lib/types";
import Title from "@components/atoms/Titles";
import AppSwiper, { SwiperSlide } from "@components/modules/AppSwiper";
import styleVariables from "@styles/variables";

const PortfolioModalComp = styled.div`
  & > .image-swiper {
    padding-bottom: 4rem;
    .swiper-slide {
      height: 300px;
      & > img {
        transition: all 0.3s;
        transform: scale(0.8);
        &:hover {
          transform: scale(0.9);
        }
        cursor: pointer;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
interface PortfolioModalProps extends ModalProps {
  portfolio?: Portfolio;
}
const PortfolioModal = ({ portfolio, ...props }: PortfolioModalProps) => {
  return (
    <Modal title={portfolio?.title} {...props}>
      <PortfolioModalComp>
        <AppSwiper
          className="image-swiper"
          slidesPerView={3}
          updateOnWindowResize={true}
          threshold={10}
          spaceBetween={10}
          pagination
        >
          {portfolio?.images
            ? portfolio.images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={portfolio.imageDir + src}
                    alt={`image-${index}`}
                    onError={(e) => {
                      e.currentTarget.src = styleVariables.image.default;
                    }}
                  />
                </SwiperSlide>
              ))
            : null}
        </AppSwiper>
        <Title level={3}>설명</Title>
        <p className="desc">{portfolio?.desc}</p>
        <Title level={3}>링크</Title>
        {portfolio?.links ? (
          <ul className="links">
            {portfolio.links.map((link, index) => (
              <li key={index}>
                <a target="_blank" href={link.url}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </PortfolioModalComp>
    </Modal>
  );
};

export default PortfolioModal;
