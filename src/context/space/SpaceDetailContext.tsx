import { createContext } from 'react';

import { SpaceDetailType } from '@/apis/spaces/types';

const SpaceDetailContext = createContext<SpaceDetailType | undefined>(
  undefined,
);

export default SpaceDetailContext;
