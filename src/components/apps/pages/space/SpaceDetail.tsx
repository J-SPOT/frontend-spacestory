import SpaceDetailContext from '@/context/space/SpaceDetailContext';
import { styled } from 'twin.macro';

import { SpaceDetailType } from '@/apis/spaces/types';

import ContentWrapper from '../../layout/ContentWrapper';
import DetailTop from './DetailTop';

type Props = {
  spaceData: SpaceDetailType;
};

export default function SpaceDetail({ spaceData }: Props) {
  return (
    <SpaceDetailContext.Provider value={spaceData}>
      <SpaceDetailContainer>
        <ContentWrapper>
          <DetailTop />
        </ContentWrapper>
      </SpaceDetailContainer>
    </SpaceDetailContext.Provider>
  );
}

const SpaceDetailContainer = styled.div``;
