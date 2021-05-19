import React from "react";
import Modal, { ModalProps } from "./Modal";
import styled from "styled-components";
import stc from "@styles/constants";

const ImageModalComp = styled.div`
  & > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
interface ImageModalProps extends ModalProps {
  imageUrl?: string;
}
const ImageModal = ({ imageUrl, ...props }: ImageModalProps) => {
  return (
    <Modal title="이미지 보기" {...props}>
      <ImageModalComp>
        <img src={imageUrl || stc.assets.picture} alt="이미지" />
      </ImageModalComp>
    </Modal>
  );
};

export default ImageModal;
