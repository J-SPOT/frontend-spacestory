import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import API_ENDPOINTS from '../api-endpoints';
import {
  deleteSpace,
  getSpaceDetail,
  getSpaces,
  searchSpaces,
  updateSpace,
} from './spaces';
import {
  SpaceListResultType,
  SpaceSearchParamsType,
  SpaceType,
  SpaceUpdateParamsType,
} from './types';

// 공간 정보 리스트 쿼리
export const useSpacesQuery = ({
  params,
  useQueryOptions,
}: {
  params: { page: number; size: number };
  useQueryOptions?: any;
}) => {
  return useQuery<SpaceListResultType, AxiosError>({
    queryKey: [API_ENDPOINTS.SPACES, params],
    queryFn: () => getSpaces(params.page, params.size),
    ...useQueryOptions,
  });
};

// 공간 수정 API 뮤테이션
export const useUpdateSpaceMutation = () => {
  return useMutation<
    SpaceType,
    AxiosError,
    { id: number; data: SpaceUpdateParamsType }
  >({
    mutationFn: ({ id, data }) => updateSpace(id, data),
  });
};

// 공간 삭제 API 뮤테이션
export const useDeleteSpaceMutation = () => {
  return useMutation<void, AxiosError, number>({
    mutationFn: (id: number) => deleteSpace(id),
  });
};

// 공간 검색 API 쿼리
export const useSearchSpacesQuery = ({
  params,
  useQueryOptions,
}: {
  params: SpaceSearchParamsType;
  useQueryOptions?: any;
}) => {
  return useQuery<SpaceListResultType, AxiosError>({
    queryKey: [API_ENDPOINTS.SPACES_SEARCH, params],
    queryFn: () => searchSpaces(params),
    ...useQueryOptions,
  });
};

// 공간 검색 API 무한 스크롤 쿼리
export const useInfiniteSearchSpacesQuery = ({
  params,
  useQueryOptions,
}: {
  params: SpaceSearchParamsType;
  useQueryOptions?: any;
}) => {
  return useInfiniteQuery<SpaceListResultType, AxiosError>({
    queryKey: [API_ENDPOINTS.SPACES_SEARCH, params.query],
    queryFn: () => searchSpaces(params as SpaceSearchParamsType),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page.number + 1;
      return nextPage < lastPage.page.totalPages ? nextPage : undefined;
    },
    ...useQueryOptions,
  });
};

// 공간 상세 정보 쿼리
export const useSpaceDetailQuery = ({
  id,
  useQueryOptions,
}: {
  id: number;
  useQueryOptions?: any;
}) => {
  return useQuery<SpaceType, AxiosError>({
    queryKey: [API_ENDPOINTS.SPACES, id],
    queryFn: () => getSpaceDetail(id),
    ...useQueryOptions,
  });
};
