/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

const scrollRight = keyframes`
  0% { transform: translateX(-100%); }
  5% { transform: translateX(-55%); }
  100% { transform: translateX(0%); }
`;

const scrollLeft = keyframes`
  0% { transform: translateX(100%); }
  5% { transform: translateX(55%); }
  100% { transform: translateX(0%); }
`;

const Row = styled.div`
  display: flex;
  animation-duration: 120s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const ScrollingImages = ({ images }: { images: StaticImageData[] }) => {
  const allImages = [...images, ...images]
  return (
    <div>
      <Row css={css`animation-name: ${scrollRight};`}>
        {allImages.map((image, index) => (
          <Image width={300} height={225} key={index} src={image} alt="" unoptimized/>
        ))}
      </Row>
      <Row css={css`animation-name: ${scrollLeft};`}>
        {allImages.map((image, index) => (
          <Image width={300} height={225} key={index} src={image} alt="" unoptimized/>
        )).reverse()}
      </Row>
    </div>
  );
};

export default ScrollingImages;