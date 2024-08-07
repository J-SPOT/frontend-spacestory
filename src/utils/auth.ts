import { useAdminAuthStore } from '@/store/adminAuthStore';

export const isAdminLoggedIn = Boolean(
  useAdminAuthStore.getState().adminAccessToken,
);

// TODO: useQuery 처리 또한 필요할듯 함
export const adminSignOut = () => {
  useAdminAuthStore.getState().clear();
  window.location.href = '/admin';
};
