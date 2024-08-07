import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import API_ENDPOINTS from '@/apis/api-endpoints';

import { getCategories, getSubCategories } from './categories';
import { CategoryType, SubCategoryType } from './types';

// 카테고리 리스트 쿼리
export const useCategoriesQuery = ({
  useQueryOptions,
}: {
  useQueryOptions?: any;
}) => {
  return useQuery<CategoryType[], AxiosError>({
    queryKey: [API_ENDPOINTS.CATEGORIES],
    queryFn: () => getCategories(),
    ...useQueryOptions,
  });
};

// 특정 카테고리의 하위 카테고리 리스트 쿼리
export const useSubCategoriesQuery = ({
  mainCategoryId,
  useQueryOptions,
}: {
  mainCategoryId: number;
  useQueryOptions?: any;
}) => {
  return useQuery<SubCategoryType[], AxiosError>({
    queryKey: [API_ENDPOINTS.CATEGORIES, mainCategoryId, 'sub'],
    queryFn: () => getSubCategories(mainCategoryId),
    ...useQueryOptions,
  });
};
