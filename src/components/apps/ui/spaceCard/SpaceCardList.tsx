import { useMediaQuery } from 'react-responsive';
import { Autoplay } from 'swiper/modules';
import { theme } from 'twin.macro';

import { SpaceType } from '@/apis/spaces/types';

import { CustomSwiper } from '../../swiper/CustomSwiper';
import SpaceCard from './SpaceCard';

type Props = {
  data: SpaceType[];
};

export default function SpaceCardList({ data }: Props) {
  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme`screens.lg`})`,
  });

  return (
    <CustomSwiper
      modules={[Autoplay]}
      items={data.map((spaceData, index) => {
        return <SpaceCard key={index} spaceData={spaceData} />;
      })}
      slidesPerView={isDesktop ? 3.02 : 1.3}
      spaceBetween={15}
      centeredSlides
      hasContentBoxShadow
      autoplay
      speed={800}
    />
  );
}
