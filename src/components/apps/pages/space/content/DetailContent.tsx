import SpaceDetailContext from '@/context/space/SpaceDetailContext';
import { useContext } from 'react';
import { styled, theme } from 'twin.macro';

import { PRECAUTION_TEXT } from '@/data/constant';

import Spinner from '@/components/apps/ui/Spinner';

import DetailContentTitle from './DetailContentTitle';

export default function DetailContent() {
  const context = useContext(SpaceDetailContext);

  if (!context) {
    return <Spinner />;
  }

  const { description, reservationNotes } = context;

  return (
    <DetailContentContainer>
      {/* 공간 소개 */}
      <DetailContentTitle title="공간 소개" />
      <Text>{description}</Text>

      {/* 예약시 주의사항 */}
      <DetailContentTitle title="예약시 주의사항" />
      <Text>
        <ol>
          {PRECAUTION_TEXT.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ol>
      </Text>

      {/* 환불규정 안내 */}
      <DetailContentTitle title="환불규정 안내" />
      <Text>{reservationNotes}</Text>
    </DetailContentContainer>
  );
}

const DetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 13px;
  line-height: 220%;
  color: #656565;
  white-space: pre-line; /* 줄바꿈을 유지하기 위해 추가 */
  @media (min-width: ${theme`screens.lg`}) {
    font-size: 16px;
  }

  ol {
    counter-reset: item;
  }

  li {
    margin-bottom: 10px;
    list-style: none;
    position: relative;
    padding-left: 25px;

    &:before {
      content: counter(item) '.';
      counter-increment: item;
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
`;
