import { getSpaceDetail } from '@/apis/spaces/spaces';
import { SpaceDetailType } from '@/apis/spaces/types';

import DesktopLayout from '@/components/apps/layout/desktop/DesktopLayout';
import MobileLayout from '@/components/apps/layout/mobile/MobileLayout';
import SpaceDetail from '@/components/apps/pages/space/SpaceDetail';

type Props = {
  data: SpaceDetailType;
};

export default function SpaceDetailPage({ data }: Props) {
  return (
    <>
      <DesktopLayout padding={{ top: '100px', bottom: '100px' }}>
        <SpaceDetail spaceData={data} />
      </DesktopLayout>

      <MobileLayout padding={{ top: '60px', bottom: '60px' }}>
        <SpaceDetail spaceData={data} />
      </MobileLayout>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { spaceIdx } = context.query;
  const data = await getSpaceDetail(spaceIdx);
  return {
    props: {
      data,
    },
  };
}
