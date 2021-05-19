import React, { useState } from "react";
import Modal, { ModalProps } from "./Modal";
import styled from "styled-components";
import { Portfolio } from "@lib/types";
import Title from "@components/atoms/Titles";
import AppSwiper, { SwiperSlide } from "@components/organisms/AppSwiper";
import stc from "@styles/constants";
import ImageModal from "./ImageModal";

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
        object-fit: contain;
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
  const [previewImage, setPreviewImage] = useState<string>();
  return (
    <Modal title={portfolio?.title} {...props}>
      <ImageModal
        visible={!!previewImage}
        imageUrl={previewImage}
        onClose={() => setPreviewImage(undefined)}
      />
      <PortfolioModalComp>
        <AppSwiper
          className="image-swiper"
          slidesPerView={1}
          updateOnWindowResize={true}
          threshold={10}
          spaceBetween={10}
          pagination
        >
          {portfolio?.images
            ? portfolio.images.map((src, index) => {
                const imageSrc = portfolio.imageDir + src;
                return (
                  <SwiperSlide key={index}>
                    <img
                      src={imageSrc}
                      alt={`image-${index}`}
                      onError={(e) => {
                        e.currentTarget.src = stc.assets.picture;
                      }}
                      onClick={() => setPreviewImage(imageSrc)}
                    />
                  </SwiperSlide>
                );
              })
            : null}
        </AppSwiper>
        <Title level={3}>설명</Title>
        <p className="desc">{portfolio?.desc}</p>
        <Title level={3}>링크</Title>
        {portfolio?.links ? (
          <ul className="links">
            {portfolio.links.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noreferrer" href={link.url}>
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
