import { useMediaQuery } from 'react-responsive';
import { styled, theme } from 'twin.macro';

import { useSpacesQuery } from '@/apis/spaces/spaces.query';

import { BANNER_IMAGE_SET } from '@/data/constant';

import ContentWrapper from '../../layout/ContentWrapper';
import Banner from '../../ui/Banner';
import Spinner from '../../ui/Spinner';
import CategoryList from '../../ui/category/CategoryList';
import SpaceCardList from '../../ui/spaceCard/SpaceCardList';

export default function Home() {
  const { data, isLoading } = useSpacesQuery({
    params: { page: 1, size: 10 },
  });

  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme`screens.lg`})`,
  });

  return (
    <HomeConatiner>
      <Section>
        <ContentWrapper>
          <Banner imageSet={BANNER_IMAGE_SET} />
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <CategoryList />
        </ContentWrapper>
      </Section>

      <Section>
        {isLoading ? (
          <Spinner />
        ) : isDesktop ? (
          <ContentWrapper>
            <SpaceCardList data={data.content} />
          </ContentWrapper>
        ) : (
          <SpaceCardList data={data.content} />
        )}
      </Section>
    </HomeConatiner>
  );
}

const HomeConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: fit-content;
`;

const Section = styled.section``;
