import API_ENDPOINTS from '../api-endpoints';
import { pureAxios } from '../axios';
import {
  SpaceDetailType,
  SpaceListResultType,
  SpaceSearchParamsType,
  SpaceType,
  SpaceUpdateParamsType,
} from './types';

// Fetch Space Information API
export const getSpaces = async (
  page: number = 0,
  size: number = 10,
): Promise<SpaceListResultType> => {
  try {
    const res = await pureAxios.get(
      `${API_ENDPOINTS.SPACES}?page=${page}&size=${size}`,
    );
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to fetch spaces');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Update Space Information API
export const updateSpace = async (
  id: number,
  data: SpaceUpdateParamsType,
): Promise<SpaceType> => {
  try {
    const res = await pureAxios.put(`${API_ENDPOINTS.SPACES}/${id}`, data);
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to update space');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Delete Space Information API
export const deleteSpace = async (id: number): Promise<void> => {
  try {
    const res = await pureAxios.delete(`${API_ENDPOINTS.SPACES}/${id}`);
    if (res.status !== 204) {
      throw new Error(res.data.msg || 'Failed to delete space');
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Search Spaces API
export const searchSpaces = async (
  params: SpaceSearchParamsType,
): Promise<SpaceListResultType> => {
  try {
    const query = new URLSearchParams(params as any).toString();
    const res = await pureAxios.get(`${API_ENDPOINTS.SPACES}/search?${query}`);
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to search spaces');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Get Space Detail API
export const getSpaceDetail = async (id: number): Promise<SpaceDetailType> => {
  try {
    const res = await pureAxios.get(`${API_ENDPOINTS.SPACES}/${id}`);
    if (res.status !== 200) {
      throw new Error(res.data.msg || 'Failed to fetch space detail');
    }
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
