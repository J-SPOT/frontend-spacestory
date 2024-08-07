import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

import { postAuthRefreshToken } from '@/apis/auth';

type Props = { children: React.ReactNode };

export default function PrivateRoute({ children }: Props): JSX.Element | null {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [isLoading, setIsLoading] = useState(true);
  const isLoggedIn = Boolean(cookies.accessToken);

  const setToken = async () => {
    try {
      const res = await postAuthRefreshToken({
        refreshToken: cookies.refreshToken,
      });

      removeCookie('accessToken');
      removeCookie('refreshToken');

      // 서버에서 받은 UTC 시간 값
      const accessTokenExpiresUTC = new Date(res.accessTokenExpired);
      const refreshTokenExpiresUTC = new Date(res.refreshTokenExpired);

      // 12시간 추가
      accessTokenExpiresUTC.setHours(accessTokenExpiresUTC.getHours() + 12);
      refreshTokenExpiresUTC.setHours(refreshTokenExpiresUTC.getHours() + 12);

      // 로컬 시간으로 변환
      const accessTokenExpiresLocal = new Date(
        accessTokenExpiresUTC.getTime() -
          accessTokenExpiresUTC.getTimezoneOffset() * 60000,
      );
      const refreshTokenExpiresLocal = new Date(
        refreshTokenExpiresUTC.getTime() -
          refreshTokenExpiresUTC.getTimezoneOffset() * 60000,
      );

      setCookie('accessToken', res?.accessToken, {
        path: '/',
        expires: accessTokenExpiresLocal,
      });
      setCookie('refreshToken', res?.refreshToken, {
        path: '/',
        expires: refreshTokenExpiresLocal,
      });
    } catch (error) {
      console.error('Error refreshing token:', error);
      router.replace('/login');
    } finally {
      setIsLoading(false); // 로딩 상태 해제
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace('/login');
    } else if (cookies.accessToken) {
      setToken();
    } else {
      router.replace('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return null; // 로딩 중일 때는 아무것도 렌더링하지 않음
  }

  return <>{children}</>;
}
