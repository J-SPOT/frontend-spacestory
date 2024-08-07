import API_ENDPOINTS from '@/apis/api-endpoints';
import { pureAxios } from '@/apis/axios';

import { CategoryType } from './types';

export const getCategories = async (): Promise<CategoryType[]> => {
  try {
    const res = await pureAxios.get(API_ENDPOINTS.CATEGORIES);
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to fetch all categories');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// 특정 카테고리의 하위 카테고리 리스트 쿼리
export const getSubCategories = async (mainCategoryId: number) => {
  const response = await pureAxios.get(
    `${API_ENDPOINTS.CATEGORIES}/main/${mainCategoryId}/sub`,
  );
  return response.data;
};
