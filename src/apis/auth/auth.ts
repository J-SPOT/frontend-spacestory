import { useAuthStore } from '@/store/authStore';

import API_ENDPOINTS from '../api-endpoints';
import { authAxios } from '../axios';
import pureAxios from '../axios/pureAxios';
import { CommonResultType } from '../types';
import {
  AuthEmailVerificationParamsType,
  AuthEmailVerificationVerifyParamsType,
  AuthLoginParamsType,
  AuthLoginResultType,
  AuthLogoutParamsType,
  AuthRefreshTokenParamsType,
  AuthRefreshTokenResultType,
  AuthSignupParamsType,
  AuthTotpQRParamsType,
  AuthTotpVerificationParamsType,
} from './types';

/**
 * Auth 액세스 토큰과 리프레시 토큰 재발행하는 API
 */
export const refreshAccessToken = async (
  params: AuthRefreshTokenParamsType,
): Promise<AuthRefreshTokenResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_TOKENS}`, params);

  if (res.status === 204) {
    console.log('authStore SetState');
    useAuthStore.setState({
      accessToken: res.data.accessToken,
    });
  }

  return res.data;
};

/**
 * Auth 회원 가입 요청 API
 */
export const postAuthSignUp = async (
  params: AuthSignupParamsType,
): Promise<CommonResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_REGISTER}`, params);

  if (res.status !== 204) {
    throw res.data.msg;
  }

  return res.data;
};

/**
 * Auth 로그인 요청 API
 */
export const postAuthLogin = async (
  params: AuthLoginParamsType,
): Promise<AuthLoginResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_LOGIN}`, params);

  if (res.data.accessToken) {
    useAuthStore.setState({
      accessToken: res.data.accessToken,
    });
  }

  return res.data;
};

/**
 * Auth 로그아웃 요청 API
 */
export const postAuthLogout = async (
  params: AuthLogoutParamsType,
): Promise<CommonResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_LOGOUT}`, params);

  return res.data;
};

/**
 * Auth 회원가입 이메일 인증코드 발급 API
 */
export const postAuthEmailVerification = async (
  params: AuthEmailVerificationParamsType,
): Promise<CommonResultType> => {
  const res = await pureAxios.post(
    `${API_ENDPOINTS.AUTH_EMAIL_VERIFICATION}`,
    params,
  );

  return res.data;
};

/**
 * Auth 회원가입 이메일 인증코드 인증 API
 */
export const postAuthEmailVerificationVerify = async (
  params: AuthEmailVerificationVerifyParamsType,
): Promise<CommonResultType> => {
  const res = await pureAxios.post(
    `${API_ENDPOINTS.AUTH_EMAIL_VERIFICATION}/verify`,
    params,
  );

  return res.data;
};

/**
 * Auth AccessToken 재발급 API
 */
export const postAuthRefreshToken = async (
  params: AuthRefreshTokenParamsType,
): Promise<AuthRefreshTokenResultType> => {
  const res = await pureAxios.post(`${API_ENDPOINTS.AUTH_TOKENS}`, params);

  return res.data;
};

/**
 * Auth Totp QR API
 */
export const postAuthTotpQR = async (
  params: AuthTotpQRParamsType,
): Promise<string> => {
  const res = await authAxios.post(`${API_ENDPOINTS.AUTH_TOTP}/qr`, params);

  return res.data;
};

/**
 * Auth Totp 검증 API
 */
export const postAuthTotpVerify = async (
  params: AuthTotpVerificationParamsType,
): Promise<CommonResultType> => {
  const res = await authAxios.post(`${API_ENDPOINTS.AUTH_TOTP}/verify`, params);

  return res.data;
};
