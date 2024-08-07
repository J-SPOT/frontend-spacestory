import SpaceDetailContext from '@/context/space/SpaceDetailContext';
import Image from 'next/image';
import { useContext } from 'react';
import { styled, theme } from 'twin.macro';

import { CustomSwiper } from '../../swiper/CustomSwiper';
import Spinner from '../../ui/Spinner';
import DetailContent from './content/DetailContent';

const DUMMY_IMAGE_SET = [
  '/images/dummy_space_image.png',
  '/images/dummy_space_image.png',
  '/images/dummy_space_image.png',
];

export default function DetailTop() {
  const context = useContext(SpaceDetailContext);

  if (!context) {
    return <Spinner />;
  }

  const { name, hashtags } = context;

  return (
    <DetailTopContainer>
      {/* 타이틀 */}
      <Title>{name}</Title>

      {/* 해시태그 */}
      <HastagContainer>
        {hashtags.map((tag, index) => {
          return <HashTag key={index}>#{tag.name}</HashTag>;
        })}
      </HastagContainer>

      {/* 이미지 스와이퍼 */}
      <CustomSwiper
        autoplay
        items={DUMMY_IMAGE_SET.map((imagePath, index) => {
          return (
            <ImageContainer key={index}>
              <Image
                src={imagePath}
                alt="space"
                fill
                style={{
                  position: 'absolute',
                  objectFit: 'cover',
                }}
              />
            </ImageContainer>
          );
        })}
      />

      {/* 컨텐츠 */}
      <DetailContent />
    </DetailTopContainer>
  );
}

const DetailTopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: Pretendard;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 20px;
  @media (min-width: ${theme`screens.lg`}) {
    margin-bottom: 30px;
    font-size: 42px;
    line-height: 43px;
  }
`;

const HastagContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 30px;
  @media (min-width: ${theme`screens.lg`}) {
    gap: 15px;
    margin-bottom: 40px;
  }
`;

const HashTag = styled.div`
  display: inline-block;
  padding: 0 10px;
  height: 29px;
  font-size: 12px;
  line-height: 29px;
  border-radius: 29px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  color: #656565;
  @media (min-width: ${theme`screens.lg`}) {
    font-size: 14px;
    padding: 0 15px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
`;
