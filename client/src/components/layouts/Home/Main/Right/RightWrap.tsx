import { FunctionComponent } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import LamboImg from "../../../../../assets/images/lambo-img.png";
import blobImg from "../../../../../assets/images/blob.svg";
// import blobImgMobile from "../../../../../assets/images/blob_mobile.png";

const RightWrapper = styled.div`
  ${tw`
    relative
    max-lg:mt-64
    mr-12
  `}
`;

const BlobWrapper = styled.div<{ className?: "blob-desktop" | undefined }>`
  ${tw`
  -mt-80
  lg:width[960px]
  max-md:(margin-top[-200px])
  `}

  img {
    ${tw`
      filter[drop-shadow(-10px -5px 20px rgb(177, 255, 253))]
    `}
  }

  &.blob-desktop {
    position: absolute;
    top: 0;
    left: 0;
    fill: #023f92;
    width: 50vmax;
    z-index: -100;
    transform-origin: 50% 50%;
  }
`;

const CarImage = styled.div`
  img {
    position: absolute;
    ${tw`
    z-50
    lg:-mt-8
    max-lg:(-my-36)
    `}
  }
`;

const RightWrap: FunctionComponent<{ mobile?: boolean }> = ({ mobile }) => {
  return (
    <RightWrapper>
      <CarImage>
        <img src={LamboImg} alt="Lambo Car" />
      </CarImage>
      <BlobWrapper className={mobile ? undefined : "blob-desktop"}>
        <img src={blobImg} alt="Blob Img" />
      </BlobWrapper>
    </RightWrapper>
  );
};

export default RightWrap;
