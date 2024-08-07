import Image from 'next/image';
import { useRouter } from 'next/router';
import { styled } from 'twin.macro';

import { SpaceType } from '@/apis/spaces/types';

// import NoImage from '../NoImage';

type Props = {
  spaceData: SpaceType;
};

export default function SpaceCard({ spaceData }: Props) {
  const {
    id,
    name,
    dong,
    hashtags,
    hourlyRate,
    maxCapacity,
    reviewCount,
    likeCount,
  } = spaceData;

  const router = useRouter();

  const handleRoute = () => {
    router.push(`/space/${id}`);
  };

  return (
    <SpaceCardContainer onClick={handleRoute}>
      <ImageWrapper>
        {/* TODO : 리스트에 이미지 패스 필요 */}
        {/* {imagePaths ? (
          <Image
            // src={imagePaths[0]}
            src="/images/dummy_space_image.png"
            alt="space"
            fill
            style={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
            sizes="380px"
          />
        ) : (
          <NoImage />
        )} */}
        <Image
          src="/images/dummy_space_image.png"
          alt="space"
          fill
          style={{ objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
          sizes="380px"
        />
      </ImageWrapper>
      <ContentsContainer>
        <Title>{name}</Title>

        <InfoWrapper>
          <Dong>{dong}</Dong>
          <HastagWrapper>
            {hashtags.map((tag, index) => {
              return <HashTag key={index}># {tag.name}</HashTag>;
            })}
          </HastagWrapper>
        </InfoWrapper>

        <InfoWrapper>
          {/* TODO : 원/시간 단위 확인 필요 */}
          <Fee>
            <strong>{hourlyRate.toLocaleString()}</strong> 원/시간
          </Fee>
          <CapacityReviewLikeWrapper>
            <Capacity>{`최대 ${maxCapacity}인`}</Capacity>
            <ReviewCount>{reviewCount}</ReviewCount>
            <LikeCount>{likeCount}</LikeCount>
          </CapacityReviewLikeWrapper>
        </InfoWrapper>
      </ContentsContainer>
    </SpaceCardContainer>
  );
}

const SpaceCardContainer = styled.div`
  box-shadow: 1px 2px 6px 0 rgba(0, 0, 0, 0.16078);
  border-radius: 12px;
  cursor: pointer;
  min-width: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 180px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: calc(100% - 180px);
  padding: 12px 16px;
  min-width: 0;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.025em;

  strong {
    font-size: 16px;
    font-weight: 600;
    letter-spacing: -0.025em;
    text-align: left;
    color: #632ed8;
    line-height: 24px;
    padding: 0 3px 0 0;
  }
`;

const Dong = styled.div`
  display: flex;
  position: relative;
  padding-left: 15px;
  &::before {
    position: absolute;
    content: '';
    width: 11px;
    height: 11.5px;
    top: 2px;
    left: 0;
    bottom: 1px;
    background: url(images/icons/location_mark.svg);
  }
`;

const HastagWrapper = styled.span`
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  span {
    margin-right: 5px;
    &:last-child {
      margin-right: 0;
    }
  }
`;

const HashTag = styled.span`
  position: relative;
`;

const Fee = styled.span`
  position: relative;
`;

const CapacityReviewLikeWrapper = styled.div`
  width: fit-content;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Capacity = styled.span`
  position: relative;
  padding-left: 15px;
  padding-right: 5px;
  &::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    top: 1px;
    left: 0;
    background: url(images/icons/users.svg);
  }
`;

const ReviewCount = styled.span`
  position: relative;
  padding-left: 15px;
  padding-right: 5px;
  &::before {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    top: 2px;
    left: 0;
    background: url(images/icons/review.svg);
  }
`;

const LikeCount = styled.span`
  position: relative;
  padding-left: 15px;
  &::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    top: 1px;
    left: 0;
    background: url(images/icons/like.svg);
  }
`;
