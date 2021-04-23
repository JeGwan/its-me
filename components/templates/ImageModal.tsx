import React from "react";
import Modal, { ModalProps } from "./Modal";
import styled from "styled-components";
import styleVariables from "@styles/variables";

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
        <img src={imageUrl || styleVariables.image.default} alt="이미지" />
      </ImageModalComp>
    </Modal>
  );
};

export default ImageModal;
